/* eslint-disable @next/next/no-img-element */
import Button from '@/components/Button'
import { useAuthContext } from '@/contexts/AuthContext'
import supabase from '@/utils/supabase'
import dayjs from 'dayjs'
import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'

// pengambilan data dari database
export const getServerSideProps = async ({
	// query adalah id dari news yang diambil dari url
	// misalnya jika urlnya '/news/view?id=ABC123' maka query.id = 'ABC123' dan dicari data dengan id ABC123 pada database
	query,
}: GetServerSidePropsContext) => {
	const { error, data } = await supabase
		.from('news')
		.select(
			'id, thumbnailUrl, title, content, createdAt, category, users(username, imageUrl)'
		)
		.eq('id', query.id)
		.single()
	if (error) throw error
	return { props: { news: data } }
}

// kompoenn ViewPostPage adalah komponen utama pada halaman ini
// komponen ini mengkonsumsi properti { news } yang didapat dari getServerSideProps() diatas yang adalah data berita tertentu yang diambil dari database
export default function ViewPostPage({ news }: PageProps) {
	// mengunakan useAuthContext() untuk mengambil data user yang sedang login
	const { user } = useAuthContext()
	// router adalah fungsi untuk mengarahkan pengguna ke halaman tertentu
	const router = useRouter()
	const author = news.users as { username: string; imageUrl: string }

	// funcsi untuk menghapus berita
	const handleDeleteNews = async () => {
		// konfirmasi pengguna apakah yakin ingin menghapus berita
		const conf = confirm('Are you sure you want to delete this post?')
		// jika pengguna tidak yakin maka berhenti dan tampilkan pesan 'Nothing changed!' mengunakan toast
		// toast adalah library yang digunakan untuk menampilkan pesan notifikasi, library ini di inisialisasi pada file '_app.tsx'
		if (!conf) return toast('Nothing changed!')
		// jika pengguna yakin maka hapus data berita dari database
		const { error } = await supabase.from('news').delete().eq('id', news.id)
		if (error) return toast.error(error.message)
		// jika berhasil maka arahkan pengguna ke halaman utama dan tampilkan pesan 'Post deleted successfully' menggunakan toast
		router.push('/')
		toast.success('Post deleted successfully')
	}
	return (
		<div className='space-y-6'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-x-4'>
					<img
						className='w-16 h-16 rounded-full'
						src={author.imageUrl || '/noProfile.jpeg'}
						alt='author image'
					/>
					<div className=''>
						<div className='font-medium dark:text-white text-lg'>
							{author.username}
						</div>
						<div>News Author</div>
						<time>{dayjs(news.createdAt).format('DD MMMM YYYY, HH:mm')}</time>
					</div>
				</div>
				{/* jika ada user yang login maka akan menamilkan kedua <Button/> dibawah utnuk mengubah dan menghapus berita */}
				{user && (
					<div className='flex gap-2'>
						{/* jika pengguna mengklik tombol update maka akan diarahkan ke halaman update berita dengan mengirimkan id berita yang akan diubah, seperti 'news/upsert?id=ABC123' */}
						<Link href={`/news/upsert?id=${news.id}`}>
							<Button className='flex gap-2 items-center'>
								Update
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-5 h-5'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
									/>
								</svg>
							</Button>
						</Link>
						<Button
							color='danger'
							className='flex gap-2 items-center'
							// ketika tombol delete diklik maka akan menjalankan fungsi handleDeleteNews() yang dideklarasikan diatas
							onClick={handleDeleteNews}
						>
							Delete
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-5 h-5'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
								/>
							</svg>
						</Button>
					</div>
				)}
			</div>
			<hr />
			<h3 className='text-3xl font-bold '>{news.title}</h3>
			<img
				src={news.thumbnailUrl}
				alt='news tumbnail'
				className='w-full rounded-md'
			/>
			<p>{news.content}</p>
			{/* komponen <RelatedNews/> dideklarasikan dibawah */}
			<RelatedNews />
		</div>
	)
}

// related news adalah komponen yang menampilkan 4 berita terkait
// tetapi pada kompoen ini datanya masih 'hardcoded' atau statis belum dari database
const RelatedNews = () => {
	return (
		<section>
			<h3 className='text-3xl font-bold mb-4'>Related News</h3>
			<div className='grid grid-cols-4 gap-2'>
				<RelatedNewsCard />
				<RelatedNewsCard />
				<RelatedNewsCard />
				<RelatedNewsCard />
			</div>
		</section>
	)
}

const RelatedNewsCard = () => {
	return (
		<article className='space-y-4'>
			<img
				src='https://picsum.photos/550/300'
				alt='post image'
				className='rounded-md'
			/>
			<h4 className='text-2xl font-bold'>
				Consequat aute voluptate aute laboris est est dolore.
			</h4>
			<Link className='hover:text-blue-700 text-blue-500' href='/post/view?id=1'>
				Read More
			</Link>
		</article>
	)
}

type PageProps = Awaited<ReturnType<typeof getServerSideProps>>['props']
