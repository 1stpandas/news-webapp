/* eslint-disable @next/next/no-img-element */
import Button from '@/components/Button'
import supabase from '@/utils/supabase'
import dayjs from 'dayjs'
import Link from 'next/link'

// ini adalah function untuk mengambil data dari database
// semua baris database akan ambil dan kolom yang diambil adalah 'id, thumbnailUrl, title, dll...'
// pengambilan data dari database mengunakan library/tool dari supabase yang sudah di konfigurasi pada file /utils/supabase.ts
export const getServerSideProps = async () => {
	const { error, data } = await supabase
		.from('news')
		.select(
			'id, thumbnailUrl, title, description, createdAt, category, users(username, imageUrl)'
		)
	if (error) throw error
	// data yang diambil dari database akan di konsumsi oleh komponen <HomePage/> dibawah
	// variabel propertinya dinamakan 'news'
	return { props: { news: data } }
}

// komponen yang render halaman home => HomePage
// komponen ini menerima properti dari function getServerSideProps() diatas yang isikan 'news'
export default function HomePage({ news }: PageProps) {
	return (
		<>
			{/* komponen ini berisikan 3 komponen yang dideklarasikan dibawah */}
			{/* urutanya sesuai dengan yang ditampilkan pada browser */}
			<Hero />
			<About />
			{/* komponen <News/> menerima data 'news' yang akan digunakan*/}
			<News news={news} />
		</>
	)
}

// ini komponen hero atau bagian selamat datang pada halaman home
const Hero = () => (
	<section className='grid max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-12 lg:grid-cols-12'>
		<div className='mr-auto place-self-center lg:col-span-7'>
			<h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
				Payments tool for software companies
			</h1>
			<p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
				From checkout to global sales tax compliance, companies around the world use
				Flowbite to simplify their payment stack.
			</p>
			<div className='flex gap-2'>
				{/* penggunaan <Link/> untuk berpindah halaman */}
				{/* disini ketika user tekan tombol  <Button>Browse News</Button> maka akan dipindahkan ke halaman /#news */}
				<Link href='/#news'>
					{/* komponen <Button/> adalah komponen custom yang dibuat dan di import pada baris 2 */}
					<Button>Browse News</Button>
				</Link>
				<Link href='/#about'>
					<Button color='alternative'>Learn More</Button>
				</Link>
			</div>
		</div>
		<div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
			<img
				src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png'
				alt='mockup'
			/>
		</div>
	</section>
)

const About = () => (
	// tag <section/> dibawah memiliki id='about' yang akan digunakan untuk berpindah halaman mengunakan <Link href='/#about'/> seperti contoh pada baris 51 diatas
	<section id='about' className='pt-20'>
		<div className='max-w-screen-md mb-8 lg:mb-16'>
			<h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
				Designed for business teams like yours
			</h2>
			<p className='text-gray-500 sm:text-xl dark:text-gray-400'>
				Here at Flowbite we focus on markets where technology, innovation, and
				capital can unlock long-term value and drive economic growth.
			</p>
		</div>
		<div className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0'>
			<div>
				<div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900'>
					<svg
						className='w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							d='M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z'
							clipRule='evenodd'
						></path>
					</svg>
				</div>
				<h3 className='mb-2 text-xl font-bold dark:text-white'>Marketing</h3>
				<p className='text-gray-500 dark:text-gray-400'>
					Plan it, create it, launch it. Collaborate seamlessly with all the
					organization and hit your marketing goals every month with our marketing
					plan.
				</p>
			</div>
			<div>
				<div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900'>
					<svg
						className='w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z'></path>
					</svg>
				</div>
				<h3 className='mb-2 text-xl font-bold dark:text-white'>Legal</h3>
				<p className='text-gray-500 dark:text-gray-400'>
					Protect your organization, devices and stay compliant with our structured
					workflows and custom permissions made for you.
				</p>
			</div>
			<div>
				<div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900'>
					<svg
						className='w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							d='M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z'
							clipRule='evenodd'
						></path>
						<path d='M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z'></path>
					</svg>
				</div>
				<h3 className='mb-2 text-xl font-bold dark:text-white'>
					Business Automation
				</h3>
				<p className='text-gray-500 dark:text-gray-400'>
					Auto-assign tasks, send Slack messages, and much more. Now power up with
					hundreds of new templates to help you get started.
				</p>
			</div>
			<div>
				<div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900'>
					<svg
						className='w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z'></path>
						<path
							fillRule='evenodd'
							d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z'
							clipRule='evenodd'
						></path>
					</svg>
				</div>
				<h3 className='mb-2 text-xl font-bold dark:text-white'>Finance</h3>
				<p className='text-gray-500 dark:text-gray-400'>
					Audit-proof software built for critical financial operations like month-end
					close and quarterly budgeting.
				</p>
			</div>
			<div>
				<div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900'>
					<svg
						className='w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z'></path>
					</svg>
				</div>
				<h3 className='mb-2 text-xl font-bold dark:text-white'>
					Enterprise Design
				</h3>
				<p className='text-gray-500 dark:text-gray-400'>
					Craft beautiful, delightful experiences for both marketing and product with
					real cross-company collaboration.
				</p>
			</div>
			<div>
				<div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900'>
					<svg
						className='w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
							clipRule='evenodd'
						></path>
					</svg>
				</div>
				<h3 className='mb-2 text-xl font-bold dark:text-white'>Operations</h3>
				<p className='text-gray-500 dark:text-gray-400'>
					Keep your company’s lights on with customizable, iterative, and structured
					workflows built for all efficient teams and individual.
				</p>
			</div>
		</div>
	</section>
)

// komponen news adalah komponen paling penting di halaman home
// komponen ini menerima property 'news' dari komponen <HomePage /> diatas
// property 'news' ini adalah array yang berisi data-data berita yang di ambil dari database
const News = ({ news }: { news: PageProps['news'] }) => {
	return (
		<section id='news' className='pt-20'>
			<div className='mx-auto max-w-screen-sm text-center lg:mb-16 mb-8'>
				<h2 className='mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
					Breaking News
				</h2>
				<p className='font-light text-gray-500 sm:text-xl dark:text-gray-400'>
					We use an agile approach to test assumptions and connect with the needs of
					your audience early and often.
				</p>
			</div>
			<div className='grid gap-4 lg:grid-cols-3'>
				{/* news.map adalah proses untuk mengulang atau iterasi komponen <NewsCard /> sebanyak jumlah data yang ada di dalam array 'news' */}
				{/* jadi misalnya jika array news dari database memiliki panjang 10 maka akan ada 10 komponen <NewsCard/> yang dirender */}
				{news.map((post) => (
					// komponen <NewsCard/> dideklarasikan di bawah
					<NewsCard {...post} key={post.id} />
				))}
			</div>
		</section>
	)
}

// komponen <NewsCard/> ini menerima property dari komponen <News/> diatas
// propertinya berupa { title, description, dll...}
const NewsCard = ({
	title,
	description,
	thumbnailUrl,
	category,
	users,
	createdAt,
	id,
}: PageProps['news'][number]) => {
	const author = users as { username: string; imageUrl: string }
	return (
		<article className='p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
			{/* property yang diterima akan digunakan seperti ini */}
			{/* thumbnail yang diterima akan digunakan pada src */}
			{/* ini membuat setiap komponen <NewsCard/> berbeda dengan yang lain, karena akan merender data yang berbeda */}
			<img
				src={thumbnailUrl}
				alt='thumbnail'
				className='mx-auto rounded-md mb-2 w-full object-cover h-[250px]'
			/>
			<div className='flex justify-between items-center mb-5 text-gray-500 '>
				<span className='bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800'>
					<svg
						className='mr-1 w-3 h-3'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z'></path>
					</svg>
					{category}
				</span>
				<span className='text-sm'>
					{/* dayjs adalah salah satu library/tool yang digunakan untuk mengformat tanggal agar lebih mudah dibaca */}
					{dayjs(createdAt).format('DD MMMM YYYY, HH:mm')}
				</span>
			</div>
			<h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-300'>
				{/* jika user mengklik link ini maka akan diarahkan ke halaman berita dengan id yang sesuai */}
				<Link href={`/news/view?id=${id}`}>{title}</Link>
			</h2>
			<p className='mb-5 font-light text-gray-500 dark:text-gray-400'>
				{/* dekripsi dari berita */}
				{/* deskripsi adalah konten dari berita yang diisi user pada halaman '/news/upsert' yang hanya diambil 4 baris pertamanya. */}
				{description}
			</p>
			<div className='flex justify-between items-center'>
				<div className='flex items-center space-x-4'>
					<img
						className='w-7 h-7 rounded-full'
						// pada src <img> ini akan mengecek apakah author memiliki imageUrl atau tidak
						// karena imageUrl tidak wajib diisi oleh user yang signup pada aplikasi
						// jadi jika imageUrl tidak ada maka akan digunakan gambar default yaitu '/noProfile.jpeg'
						src={author.imageUrl || '/noProfile.jpeg'}
						alt='Jese Leos avatar'
					/>
					<span className='font-medium dark:text-white'>{author.username}</span>
				</div>
				<Link
					// jika user mengklik link ini maka akan diarahkan ke halaman berita dengan id yang sesuai
					href={`/news/view?id=${id}`}
					className='inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline'
				>
					Read more
					<svg
						className='ml-2 w-4 h-4'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
							clipRule='evenodd'
						></path>
					</svg>
				</Link>
			</div>
		</article>
	)
}

type PageProps = Awaited<ReturnType<typeof getServerSideProps>>['props']
