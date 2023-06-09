// komponen <TextInput /> ini akan digunakan untuk membuat input text
// kompoenen ini adalah komponen html biasa yang sudah di styling menggunakan css
const TextInput = ({ label, className, ...restProps }: TextInputProps) => {
	return (
		<div>
			<label
				htmlFor={label}
				className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
			>
				{label}
			</label>
			<input
				{...restProps}
				className={`${className} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
			/>
		</div>
	)
}
export default TextInput

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string
}
