/* eslint-disable @next/next/no-img-element */
import { useAuthContext } from '@/contexts/AuthContext'
import { UserSession } from '@/types/global'
import supabase from '@/utils/supabase'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode, useState } from 'react'
import { createPortal } from 'react-dom'
import { toast } from 'react-hot-toast'
import Button from './Button'
import MainLogo from './MainLogo'
import TextInput from './TextInput'
import ThemeTogglerButton from './ThemeTogglerButton'

const Navbar = () => {
	// useAuthContext() diguakan untuk memanipulasi data user yang sedang login
	const { user, setUser } = useAuthContext()
	// variabel isMobileOpen digunakan untuk menentukan apakah menu mobile sedang terbuka atau tidak
	const [isMobileOpen, setIsMobileOpen] = useState(false)

	// funsi untuk logut
	const logout = async () => {
		// jika user menekan tombol logout, maka user akan dihapus pada variabel di /contexts/AuthContext.tsx, dan juga pada localStorage
		setUser(null)
		localStorage.removeItem('user')
		toast.success('Logout berhasil')
	}

	return (
		<nav className='bg-white backdrop-blur-md border-gray-200 dark:border-gray-700 border-b dark:bg-gray-900 fixed top-0 w-screen'>
			<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 gap-2'>
				<Link href='/' className='flex items-center'>
					<MainLogo />
					<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
						Terserah
					</span>
				</Link>
				<div className='flex items-center md:order-2'>
					<ProfileButton />
					<button
						className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
						// jika pengguna menekan tombol ini, maka variabel isMobileOpen akan berubah menjadi kebalikannya, dan menu mobile akan ditampilkan atau disembunyikan
						onClick={() => setIsMobileOpen((prev) => !prev)}
					>
						<svg
							className='w-6 h-6'
							aria-hidden='true'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
								clipRule='evenodd'
							></path>
						</svg>
					</button>
				</div>
				<div
					className={`${
						// menggunakan css untuk menampilkan atau menyembunyikan menu mobile
						isMobileOpen ? '' : 'hidden'
					} items-center justify-between w-full md:flex md:w-auto md:order-1`}
					id='mobile-menu-2'
				>
					{/* tag <ul> ini akam merender item-item navbar, yang bisa diguakan user unutk bernavikasi seputar aplikasi */}
					<ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border items-center rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700'>
						<NavLink href='/'>Home</NavLink>
						<NavLink href='/#about'>About</NavLink>
						<NavLink href='/#news'>News</NavLink>
						{/* jika ada user yang login maka akan muncul 2 menu tambahan */}
						{user && (
							<>
								{/* hanya user login yang bisa mengunjugi halaman dibawah */}
								<NavLink href='/news/upsert'>Create</NavLink>
								{/* ada juga item untuk logout dari aplikasi, saat diklik maka akan mengeksekusi fungsi logout */}
								<li
									onClick={logout}
									className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer'
								>
									Logout
								</li>
							</>
						)}
						<li>
							{/* ThemeTogglerButton adalah komponen yang diguakan untuk mengganti tema aplikasi,*/}
							<ThemeTogglerButton />
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

// komponen NavLink diguakan untuk membuat item navbar, komponen ini menerima properti href, yang diguakan untuk menentukan link mana user akan diarahkan
const NavLink = ({ href, children }: { href: string; children: ReactNode }) => {
	// useRouter digunakan untuk menavigasi pada aplikasi
	const router = useRouter()
	// variabel ini diguakan untuk menentukan apakah item navbar sedang aktif atau tidak
	// aktif atau tidak bergantung pada apakah url yang sedang dibuka sama dengan href yang diberikan pada properti href
	const isActive = router.asPath === href

	return (
		<li>
			<Link
				href={href}
				className={`${
					// jika item navbar sedang aktif, maka akan diberikan warna biru, jika tidak, maka akan diberikan warna abu-abu
					isActive
						? 'dark:text-blue-500 text-blue-700'
						: 'md:hover:text-blue-700 md:dark:hover:text-blue-500'
				} block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
			>
				{children}
			</Link>
		</li>
	)
}

const ProfileButton = () => {
	// user yang sedang login
	const { user } = useAuthContext()
	// variabel ini diguakan untuk menentukan apakah modal login atau register sedang ditampilkan atau tidak
	const [isModalOpen, setIsOpen] = useState(false)

	// funsi ini digunakan untuk menutup atau membuka modal
	const toggleModal = () => setIsOpen((prev) => !prev)

	return (
		<div className=''>
			{/* jika ada user maka akan ditampilkan foto profil user*/}
			{user ? (
				<img
					className='object-cover flex text-sm bg-gray-800 md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 w-10 h-10 rounded-full'
					src={user.imageUrl || '/noProfile.jpeg'}
					alt='user photo'
					width={40}
					height={40}
				/>
			) : (
				// jika tidak maka akan ditampilkan tombol untuk login atau register
				// saat button di klik, maka akan menampilkan modal login atau register yaitu <AuthModal />
				<Button onClick={toggleModal}>Sign In</Button>
			)}
			{/* <AuthModal/> akan dirender saat variabel isModalOpen bernilai true */}
			{isModalOpen &&
				createPortal(
					<AuthModal toggleModal={toggleModal} />,
					document.body as Element
				)}
		</div>
	)
}

const AuthModal = ({ toggleModal }: { toggleModal: () => void }) => {
	const { setUser } = useAuthContext()
	// variabel ini diguakan untuk menentukan apakah user sedang login atau register
	const [isSignUp, setIsSignUp] = useState(false)
	// variabel ini diguakan untuk menampung data form login atau register
	const [formData, setFormData] = useState<Partial<UserSession>>({})

	// fungsi ini akan dieksekusi saat user menekan tombol login atau register
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		// mengecek apakah user berusaha untuk register atau login
		if (isSignUp) {
			// jika user berusaha untuk register, maka akan dibuat data user baru pada database
			const { error } = await supabase.from('users').insert(formData)
			if (error) return toast.error(error.message)
			toast.success('Account created successfully')
			// jika user berhasil register, maka akan kembali ke tampak login, agar user bisa login
			return setIsSignUp(false)
		}
		// jika user berusaha untuk login, maka akan dilakukan pengecekan apakah username dan password yang dimasukkan benar
		// sesuai dengan data yang ada pada database
		const { error, data } = await supabase
			.from('users')
			.select('imageUrl,id')
			.match({
				username: formData.username,
				password: formData.password,
			})
			.single()
		if (error) console.log(error)

		// jika username atau password salah, maka akan menampilkan pesan error, dan mengosongkan input password
		if (!data) {
			setFormData((prev) => ({ ...prev, password: '' }))
			return alert('Invalid credentials')
		}
		// jika username dan password benar, maka akan menyimpan data user ke variabel pada /context/AuthContext.tsx
		const user = { ...formData, ...data } as UserSession
		setUser(user)
		// dan menyimpan data user ke localStorage untuk diingat selama user tidak logout
		localStorage.setItem('user', JSON.stringify(user))
		toast.success(`Welcome ${user.username}!`)
		// modal akan ditutup setelah user berhasil login
		return toggleModal()
	}

	return (
		<div className='h-screen w-screen fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-black bg-opacity-20'>
			<div className='w-[400px] bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
				<div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
					<div className='flex justify-between items-center'>
						<h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
							{/* merender text yang berbeda tergatung dari tampilan register atau login */}
							{isSignUp ? 'Create an account' : 'Sign in to your account'}
						</h1>
						<span onClick={toggleModal}>X</span>
					</div>
					<form
						className='space-y-4 md:space-y-6'
						// saat form ini di submit, maka akan mengeksekusi fungsi handleSubmit
						onSubmit={handleSubmit}
					>
						<div>
							<TextInput
								onChange={(e) => setFormData({ ...formData, username: e.target.value })}
								value={formData.username}
								label='Your Username'
								placeholder='randomusername123'
								required
							/>
						</div>
						<div>
							<TextInput
								onChange={(e) => setFormData({ ...formData, password: e.target.value })}
								value={formData.password}
								label='Your password'
								placeholder='••••••••'
								type='password'
								required
							/>
						</div>
						{/* saat user berusaha untuk register, maka akan ditampilkan input untuk mengisi url gambar profil*/}
						{/* pengimputan gambar profil ini tidak harus alias opsional */}
						{isSignUp && (
							<div>
								<TextInput
									onChange={(e) =>
										setFormData({ ...formData, imageUrl: e.target.value })
									}
									value={formData.imageUrl}
									placeholder='https://www.image.com/random.png'
									label='Your Image URL'
								/>
							</div>
						)}
						{/* merender text yang berbeda tergatung dari tampilan register atau login */}
						<Button type='submit'>Sign {isSignUp ? 'up' : 'in'}</Button>
					</form>
					<p className='text-sm font-light text-gray-500 dark:text-gray-400'>
						{isSignUp ? 'Already have an account? ' : "Don't have an account yet? "}
						<button
							onClick={() => setIsSignUp((prev) => !prev)}
							className='font-medium text-primary-600 hover:underline dark:text-primary-500'
						>
							Sign {isSignUp ? 'in' : 'up'}
						</button>
					</p>
				</div>
			</div>
		</div>
	)
}
export default Navbar
