/* eslint-disable @next/next/no-img-element */
import { useAuthContext } from '@/contexts/AuthContext'
import { ThemeContext } from '@/contexts/ThemeContext'
import { UserSession } from '@/types/global'
import supabase from '@/utils/supabase'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode, useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import { toast } from 'react-hot-toast'
import Button from './Button'
import MainLogo from './MainLogo'
import TextInput from './TextInput'
const Navbar = () => {
	const { theme, switchTheme } = useContext(ThemeContext)

	const { user, setUser } = useAuthContext()
	const [isOpen, setIsOpen] = useState(false)

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
					<ProfileButton />
					<button
						className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
						onClick={() => setIsOpen((prev) => !prev)}
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
						isOpen ? '' : 'hidden'
					} items-center justify-between w-full md:flex md:w-auto md:order-1`}
					id='mobile-menu-2'
				>
					<ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700'>
						<NavLink href='/'>Home</NavLink>
						<NavLink href='/#about'>About</NavLink>
						<NavLink href='/#news'>News</NavLink>
						{user && (
							<>
								<NavLink href='/news/upsert'>Create</NavLink>
								<li
									onClick={() => {
										setUser(null)
										localStorage.removeItem('user')
									}}
									className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer'
								>
									Logout
								</li>
								<li onClick={() => switchTheme()} className='text-black'>
									change theme
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</nav>
	)
}
const NavLink = ({ href, children }: { href: string; children: ReactNode }) => {
	const router = useRouter()
	const isActive = router.asPath === href

	return (
		<li>
			<Link
				href={href}
				className={`${
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
	const { user } = useAuthContext()

	const [isOpen, setIsOpen] = useState(false)
	const toggleModal = () => setIsOpen((prev) => !prev)
	return (
		<div className=''>
			{user ? (
				<img
					className='flex mr-3 text-sm bg-gray-800 md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 w-8 h-8 rounded-full'
					src={user.imageUrl || '/noProfile.jpeg'}
					alt='user photo'
					width={40}
					height={40}
				/>
			) : (
				<Button onClick={toggleModal}>Sign In</Button>
			)}
			{isOpen &&
				createPortal(
					<AuthModal toggleModal={toggleModal} />,
					document.body as Element
				)}
		</div>
	)
}

const AuthModal = ({ toggleModal }: { toggleModal: () => void }) => {
	const { setUser } = useAuthContext()
	const [isSignUp, setIsSignUp] = useState(false)
	const [formData, setFormData] = useState<Partial<UserSession>>({})

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (isSignUp) {
			const { error } = await supabase.from('users').insert(formData)
			if (error) return toast.error(error.message)
			toast.success('Account created successfully')
			return setIsSignUp(false)
		}
		const { error, data } = await supabase
			.from('users')
			.select('imageUrl,id')
			.match({
				username: formData.username,
				password: formData.password,
			})
			.single()
		if (error) console.log(error)

		if (!data) {
			setFormData((prev) => ({ ...prev, password: '' }))
			return alert('Invalid credentials')
		}
		const user = { ...formData, ...data } as UserSession
		setUser(user)
		localStorage.setItem('user', JSON.stringify(user))
		toast.success(`Welcome ${user.username}!`)
		return toggleModal()
	}

	return (
		<div className='h-screen w-screen fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-black bg-opacity-20'>
			<div className='w-[400px] bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
				<div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
					<div className='flex justify-between items-center'>
						<h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
							{isSignUp ? 'Create an account' : 'Sign in to your account'}
						</h1>
						<span onClick={toggleModal}>X</span>
					</div>
					<form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
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
