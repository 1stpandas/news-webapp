import Button from '@/components/Button'
import Link from 'next/link'

/* eslint-disable @next/next/no-img-element */
export default function IndexPage() {
	return (
		<>
			<section className='bg-white dark:bg-gray-900'>
				<div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
					<div className='mr-auto place-self-center lg:col-span-7'>
						<h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
							Payments tool for software companies
						</h1>
						<p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
							From checkout to global sales tax compliance, companies around the world
							use Flowbite to simplify their payment stack.
						</p>
						<div className='flex gap-2'>
							<Link href='/post/upsert'>
								<Button>Create Your First News</Button>
							</Link>
							<Link href='#'>
								<Button color='alternative'>Learn Moreertumbuhan penduduk</Button>
							</Link>
						</div>
					</div>
					<div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
						<img
							src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png'
							alt='mockup'
						/>
					</div>
				</div>
			</section>
			<News />
		</>
	)
}

const News = () => {
	return (
		<section className='bg-white dark:bg-gray-900'>
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
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
			</div>
		</section>
	)
}

const NewsCard = () => {
	return (
		<article className='p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
			<img
				src='https://picsum.photos/550/300'
				className='mx-auto rounded-md mb-2'
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
					Tutorial
				</span>
				<span className='text-sm'>14 days ago</span>
			</div>
			<h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-300'>
				<Link href='/post/view?id=1'>How to quickly deploy a static website</Link>
			</h2>
			<p className='mb-5 font-light text-gray-500 dark:text-gray-400'>
				Static websites are now used to bootstrap lots of websites and are becoming
				the basis for a variety of tools that even influence both web designers and
				developers influence both web designers and developers.
			</p>
			<div className='flex justify-between items-center'>
				<div className='flex items-center space-x-4'>
					<img
						className='w-7 h-7 rounded-full'
						src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png'
						alt='Jese Leos avatar'
					/>
					<span className='font-medium dark:text-white'>Jese Leos</span>
				</div>
				<Link
					href='/post/view?id=1'
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
							fill-rule='evenodd'
							d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
							clip-rule='evenodd'
						></path>
					</svg>
				</Link>
			</div>
		</article>
	)
}
