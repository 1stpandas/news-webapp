import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { ReactNode, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}
const Layout = ({ children }: { children: ReactNode }) => (
	<>
		<Navbar />
		<div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 mt-10'>
			{children}
		</div>
		<Footer />
	</>
)

const MainLogo = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 16 16'
		className='w-8 h-8 fill-blue-900'
	>
		<path d='M10.167 3.242c.435-.523.742-1.24.742-1.958 0-.105-.008-.202-.03-.284-.704.03-1.55.47-2.06 1.069-.397.448-.772 1.173-.772 1.891 0 .112.023.217.03.254.045.008.12.015.188.015.636 0 1.43-.419 1.902-.987zm.495 1.144c-1.057 0-1.918.643-2.465.643-.591 0-1.355-.606-2.284-.606C4.168 4.423 2.4 5.866 2.4 8.58c0 1.697.652 3.491 1.46 4.642C4.557 14.193 5.164 15 6.04 15c.869 0 1.251-.575 2.33-.575 1.093 0 1.333.56 2.292.56.95 0 1.587-.867 2.18-1.727.673-.986.95-1.943.958-1.988-.053-.015-1.873-.755-1.873-2.833 0-1.794 1.431-2.6 1.513-2.66-.943-1.354-2.381-1.391-2.778-1.391z' />
	</svg>
)

const Navbar = () => {
	const [open, setOpen] = useState(false)
	return (
		<nav className='bg-white bg-opacity-25 backdrop-blur-md border-gray-200 border-b dark:bg-gray-900 fixed top-0 w-screen'>
			<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 gap-2'>
				<Link href='/' className='flex items-center'>
					<MainLogo />
					<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
						Terserah
					</span>
				</Link>
				<div className='flex items-center md:order-2'>
					<img
						className='flex mr-3 text-sm bg-gray-800 md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 w-8 h-8 rounded-full'
						src='/docs/images/people/profile-picture-3.jpg'
						alt='user photo'
					/>
					<button
						className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
						onClick={() => setOpen((prev) => !prev)}
					>
						<span className='sr-only'>Open main menu</span>
						<svg
							className='w-6 h-6'
							aria-hidden='true'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fill-rule='evenodd'
								d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
								clip-rule='evenodd'
							></path>
						</svg>
					</button>
				</div>
				<div
					className={`${
						open ? '' : 'hidden'
					} items-center justify-between w-full md:flex md:w-auto md:order-1`}
					id='mobile-menu-2'
				>
					<ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700'>
						<li>
							<Link
								href='/'
								className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
								aria-current='page'
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href='#'
								className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
							>
								About
							</Link>
						</li>
						<li>
							<Link
								href='#'
								className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
							>
								Services
							</Link>
						</li>
						<li>
							<Link
								href='/post/upsert'
								className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
							>
								New Post
							</Link>
						</li>
						<li>
							<Link
								href='#'
								className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
							>
								Logout
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

const Footer = () => {
	return (
		<footer className='p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800'>
			<div className='mx-auto max-w-screen-xl text-center'>
				<a
					href='#'
					className='flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white'
				>
					<MainLogo />
					Terserah
				</a>
				<p className='my-6 text-gray-500 dark:text-gray-400'>
					Open-source library of over 400+ web components and interactive elements
					built for better web.
				</p>
				<ul className='flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white'>
					<li>
						<a href='#' className='mr-4 hover:underline md:mr-6 '>
							About
						</a>
					</li>
					<li>
						<a href='#' className='mr-4 hover:underline md:mr-6'>
							Premium
						</a>
					</li>
					<li>
						<a href='#' className='mr-4 hover:underline md:mr-6 '>
							Campaigns
						</a>
					</li>
					<li>
						<a href='#' className='mr-4 hover:underline md:mr-6'>
							Blog
						</a>
					</li>
					<li>
						<a href='#' className='mr-4 hover:underline md:mr-6'>
							Affiliate Program
						</a>
					</li>
					<li>
						<a href='#' className='mr-4 hover:underline md:mr-6'>
							FAQs
						</a>
					</li>
					<li>
						<a href='#' className='mr-4 hover:underline md:mr-6'>
							Contact
						</a>
					</li>
				</ul>
				<span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
					© 2021-2022{' '}
					<a href='#' className='hover:underline'>
						Flowbite™
					</a>
					. All Rights Reserved.
				</span>
			</div>
		</footer>
	)
}
