import Button from '@/components/Button'
import TextInput from '@/components/TextInput'
import { useAuthContext } from '@/contexts/AuthContext'
import supabase from '@/utils/supabase'
import { GetServerSidePropsContext } from 'next'
import { FormEvent, useState } from 'react'
import { toast } from 'react-hot-toast'
interface PageProps {
	data?: {
		title: string
		thumbnailUrl: string
		category: string
		content: string
		id: string
	}
}

// fungsi ini akan mengambil data berita dari database berdasarkan id yang diambil dari url
// jika id tidak ada maka akan mengembalikan properti kosong, maka akan diartikan bahwa pengguna akan membuat berita baru
// jika id ada maka akan mengambil data berita dari database dan mengembalikan properti data yang berisi data berita tersebut, dan data tersebut akan dijadikan nilai awal pada form yang akan dirender
export const getServerSideProps = async ({
	query,
}: GetServerSidePropsContext) => {
	if (!query.id) return { props: {} }
	const { data, error } = await supabase
		.from('news')
		.select('title,content,thumbnailUrl,category,id')
		.eq('id', query.id)
		.single()
	if (error) throw error

	return {
		props: { data },
	}
}

export default function CreatePostPage({ data }: PageProps) {
	const { user } = useAuthContext()
	// deklarasi variabel formData yang berisi data berita yang akan diinputkan oleh pengguna
	// jika pengguna akan membuat berita baru maka formData akan diisi dengan nilai awal berupa object kosong
	// jika pengguna akan mengedit berita maka formData akan diisi dengan nilai awal berupa data berita yang diambil dari database
	const [formData, setFormData] = useState(
		data || {
			id: undefined,
			title: '',
			thumbnailUrl: '',
			category: 'criminal',
			content: '',
		}
	)
	// jika pengguna belum login maka akan ditampilkan pesan 401
	// ini akan menghindari pengguna yang belum login untuk mengakses halaman ini
	if (!user) return <div>401</div>

	// fungsi ini akan dijalankan ketika submisi form dibawah
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		// mengecek apakah properti id pada formData yang dideklarasikan diatas ada atau tidak
		// jika ada maka diasumsikan bahwa data pada database sudah ada dan user ingin mengubahnya
		if (formData.id) {
			const { error } = await supabase
				.from('news')
				.update({
					title: formData.title,
					thumbnailUrl: formData.thumbnailUrl,
					category: formData.category,
					content: formData.content,
					description: formData.content.slice(0, 200),
				})
				.eq('id', formData.id)
			// pesan error atau sukses dengan mengunakan library toast
			if (error) return toast.error(error.message)
			return toast.success('Post updated successfully')
		}
		// jika properti id tidak ada maka diasumsikan bahwa data pada database belum ada dan user ingin membuatnya
		const { error } = await supabase.from('news').insert({
			...formData,
			userId: user?.id,
			// pembuata deskripsi berita yang dibuat dari 200 karakter pertama dari konten berita yang diisi oleh pengguna
			description: formData.content.slice(0, 200),
		})
		if (error) return toast.error(error.message)
		return toast.success('Post created successfully')
	}

	return (
		<form
			className='space-y-6'
			// ketika form di submit maka fungsi handleSubmit() akan eksekusi
			onSubmit={handleSubmit}
		>
			<div>
				{/* komponen <TextInput/> adalah komponen kustom pada file '/components/TextInput.tsx'
				komponen ini akan menampilkan input text dengan label dan placeholder yang dapat diatur*/}
				<TextInput
					label='Title'
					placeholder='Something happend last night'
					// value pada input ini dikaitkan dengan properti title pada objek formData
					value={formData.title}
					// ketika pengguna mengisi form input ini maka fungsi onChange akan dijalankan dan mengubah properti title pada objek formData
					onChange={(e) => setFormData({ ...formData, title: e.target.value })}
					// properti required digunakan untuk menandakan bahwa input ini wajib diisi.
					required
				/>
			</div>
			<div className='grid gap-6 md:grid-cols-2'>
				<div>
					<TextInput
						label='Thumbnail URL'
						placeholder='https://example.com/something.png'
						value={formData.thumbnailUrl}
						onChange={(e) =>
							setFormData({ ...formData, thumbnailUrl: e.target.value })
						}
						required
					/>
				</div>
				<div>
					<label
						htmlFor='category'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Category
					</label>
					<select
						id='category'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						required
						value={formData.category}
						onChange={(e) => setFormData({ ...formData, category: e.target.value })}
					>
						<option value='criminal'>Criminal</option>
						<option value='international'>International</option>
						<option value='ST'>Sport</option>
						<option value='PS'>Politics</option>
						<option value='FD'>Food</option>
						<option value='EN'>Education</option>
						<option value='GS'>Games</option>
						<option value='FN'>Fashion</option>
						<option value='TY'>Technology</option>
						<option value='AT'>Art</option>
						<option value='MC'>Music</option>
						<option value='AE'>Automotive</option>
						<option value='HH'>Heatlh</option>
						<option value='RN'>Religion</option>
						<option value='TG'>Traveling</option>
					</select>
				</div>
			</div>

			<div>
				<label
					htmlFor='content'
					className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
				>
					Content
				</label>
				<textarea
					required
					id='content'
					rows={16}
					className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					placeholder='Write the post content here please...'
					value={formData.content}
					onChange={(e) => setFormData({ ...formData, content: e.target.value })}
				></textarea>
			</div>
			<Button type='submit'>Submit</Button>
		</form>
	)
}
