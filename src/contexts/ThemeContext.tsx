import {
	createContext,
	ReactNode,
	useCallback,
	useEffect,
	useState,
} from 'react'

export const ThemeContext = createContext({} as ThemeContext)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<Theme>('light')

	useEffect(() => {
		setTheme((localStorage.getItem('theme') as Theme) || 'light')
	}, [])

	const themeToSwitch = theme === 'dark' ? 'light' : 'dark'

	const toggleColorMode = useCallback(
		() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')),
		[]
	)

	useEffect(() => {
		const root = window.document.documentElement
		root.classList.remove(themeToSwitch)
		root.classList.add(theme)
	}, [theme])

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
type Theme = 'dark' | 'light'

interface ThemeContext {
	theme: Theme
	switchTheme: () => void
}
