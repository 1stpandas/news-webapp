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

const AuthContext = createContext({} as AuthContext)
export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<UserSession | null>(null)
	useEffect(() => {
		const localStorageUser = localStorage.getItem('user')
		const initialUser = localStorageUser ? JSON.parse(localStorageUser) : null
		initialUser && setUser(initialUser)
	}, [])

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}
export const useAuthContext = () => useContext(AuthContext)
interface AuthContext {
	user: UserSession | null
	setUser: Dispatch<SetStateAction<UserSession | null>>
}
