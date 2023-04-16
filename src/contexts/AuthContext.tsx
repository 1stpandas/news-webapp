import { UserSession } from '@/types/global'
import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from 'react'

// Context adalah sebuah cara untuk menyimpan data yang bisa diakses oleh semua komponen di dalam aplikasi.

// pada Context ini kita menyimpan data user yang sedang login
const AuthContext = createContext({} as AuthContext)
export const AuthProvider = ({ children }: { children: ReactNode }) => {
	// variabel user menyimpan data user yang sedang login
	// variabel ini bisa berisi objeck dari user yang sedang login atau null yang berarti tidak ada user yang sedang login
	const [user, setUser] = useState<UserSession | null>(null)
	useEffect(() => {
		// proses pengecekan apa ada user yang pernah login sebelumnya
		// dengan mengakses localStorage
		// localStorage adalah sebuah tempat penyimpanan data yang tetap konsisten meskipun browser ditutup
		const localStorageUser = localStorage.getItem('user')
		const initialUser = localStorageUser ? JSON.parse(localStorageUser) : null
		initialUser && setUser(initialUser)
	}, [])

	return (
		<AuthContext.Provider
			// disini kita menyediakan data 'user' dan fungsi 'setUser' untuk mengubah data user
			// setUser akan digunakan saat user login dan logout
			value={{ user, setUser }}
		>
			{children}
		</AuthContext.Provider>
	)
}

// fungsi ini kita export agar bisa digunakan oleh komponen lain
// dengan funcsi ini kita bisa mengakses data 'user' dan fungsi 'setUser' yang dideklarasikan di atas dari mana saja
export const useAuthContext = () => useContext(AuthContext)

interface AuthContext {
	user: UserSession | null
	setUser: Dispatch<SetStateAction<UserSession | null>>
}
