import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react'

// konsep Context ini sama saja dengan pada /contexts/AuthContext.tsx

const ThemeContext = createContext({} as ThemeContext)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	// variabel theme menyimpan data tema yang sedang digunakan
	// variabel ini bisa berisi 'dark' atau 'light'
	const [theme, setTheme] = useState<Theme>('light')

	// mengecek apakah ada tema yang pernah disimpan di localStorage sebelumnya
	useEffect(() => {
		setTheme((localStorage.getItem('theme') as Theme) || 'light')
	}, [])

	const themeToSwitch = theme === 'dark' ? 'light' : 'dark'

	const toggleColorMode = useCallback(
		() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')),
		[]
	)

	// proses untuk mengubah tema
	useEffect(() => {
		const root = window.document.documentElement
		root.classList.remove(themeToSwitch)
		root.classList.add(theme)
	}, [theme])

	// funsi ini akan digunakan untuk mengubah tema
	const switchTheme = () => {
		toggleColorMode()
		localStorage.setItem('theme', themeToSwitch)
	}

	return (
		<>
			<ThemeContext.Provider value={{ theme, switchTheme }}>
				{children}
			</ThemeContext.Provider>
			<style>{`
				:root {
 	            color-scheme: ${theme};
		}
			`}</style>
		</>
	)
}

export const useThemeContext = () => useContext(ThemeContext)

type Theme = 'dark' | 'light'

interface ThemeContext {
	theme: Theme
	switchTheme: () => void
}
