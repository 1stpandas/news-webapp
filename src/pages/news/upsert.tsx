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

export default function CreatePostPage({ data }: PageProps) {
	const { user } = useAuthContext()
	const [formData, setFormData] = useState(
		data || {
			id: undefined,
			title: '',
			thumbnailUrl: '',
			category: 'criminal',
			content: '',
		}
	)
	if (!user) return <div>401</div>

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
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
			if (error) return toast.error(error.message)
			return toast.success('Post updated successfully')
		}
		const { error } = await supabase.from('news').insert({
			...formData,
			userId: user?.id,
			description: formData.content.slice(0, 200),
		})
		if (error) return toast.error(error.message)
		return toast.success('Post created successfully')
	}

	return (
		<form className='space-y-6' onSubmit={handleSubmit}>
			<div>
				<TextInput
					label='Title'
					placeholder='Something happend last night'
					value={formData.title}
					onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
						<option value='FR'>France</option>
						<option value='DE'>Germany</option>
						<option value='FD'>Food</option>
						<option value='EN'>Education</option>
						<option value='GS'>Games</option>
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
