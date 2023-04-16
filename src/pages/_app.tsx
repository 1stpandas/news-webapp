import MainLogo from '@/components/MainLogo'
import Navbar from '@/components/Navbar'
import { AuthProvider } from '@/contexts/AuthContext'
import { ThemeProvider } from '@/contexts/ThemeContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

// komponen <App/> adalah komponen parent dari seluruh komponen pada aplikasi ini
// komponen ini adalah titik masuk dari aplikasi ini
// seluruh deklarasi pada komponen ini akan berdampak pada seluruh halaman pada aplikasi ini
export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

// Komponen layout adalah komponen yang akan di render di setiap halaman
// berisikan komponen navbar, footer, dan komponen lain yang akan di render di setiap halaman
const Layout = ({ children }: { children: ReactNode }) => (
	// disini juga ada komponen <AuthProvider> dan <ThemeProvider>
	// provider diguankan untuk menyediakan data yang bisa diakses oleh komponen-komponen dibawahnya
	// data yang bersangukutan adalah data user utnuk <AuthProvider> dan data tema untuk <ThemeProvider>
	// data-data tersebut dideklarasikan pada file contexts/AuthContext.tsx dan contexts/ThemeContext.tsx, tetapi bisa diakses oleh seluruh komponen lain pada aplikasi ini.
	<AuthProvider>
		<ThemeProvider>
			<div className='bg-white dark:bg-gray-900'>
				{/* <Toaster/> adalah penginisialisasian library/tool toast untuk menampilkan pesan notifikasi */}
				{/* disini juga di konfigurasikan posisi notifikasi toastnya pada posisi 'top-right' atau atas-kanan */}
				<Toaster position='top-right' />
				<Navbar />
				<div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 mt-10'>
					{/* children merupakan seluruh komponen yang ada dibawahnya */}
					{/* karena komponen ini adalah komponen <Layout/> maka komponen ini beradap pada lapisan paling atas dan 'children' adalah seluruh halaman pada aplikasi ini. */}
					{children}
				</div>
				<Footer />
			</div>
		</ThemeProvider>
	</AuthProvider>
)

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
