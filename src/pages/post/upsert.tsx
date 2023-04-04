import Button from '@/components/Button'
import { useState } from 'react'

export default function CreatePostPage() {
	const [formData, setFormData] = useState({
		authorName: '',
		authorProfession: '',
		authorProfilePictureUrl: '',
		title: '',
		thumbnailUrl: '',
		category: 'criminal',
		content: '',
	})

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		alert(JSON.stringify(formData))
	}

	return (
		<form className='space-y-6' onSubmit={handleSubmit}>
			<div className='grid gap-6 md:grid-cols-2'>
				<div>
					<FormInput
						label='Author Name'
						placeholder='Budi Doremi'
						value={formData.authorName}
						onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
					/>
				</div>
				<div>
					<FormInput
						label='Author Profession'
						placeholder='Backend Engineer'
						value={formData.authorProfession}
						onChange={(e) =>
							setFormData({ ...formData, authorProfession: e.target.value })
						}
					/>
				</div>
				<div>
					<FormInput
						label='Author Profile Picture Url'
						placeholder='https://example.com/something.png'
						value={formData.authorProfilePictureUrl}
						onChange={(e) =>
							setFormData({ ...formData, authorProfilePictureUrl: e.target.value })
						}
					/>
				</div>
				<div>
					<FormInput
						label='Thumbnail URL'
						placeholder='https://example.com/something.png'
						value={formData.thumbnailUrl}
						onChange={(e) =>
							setFormData({ ...formData, thumbnailUrl: e.target.value })
						}
					/>
				</div>
				<div>
					<FormInput
						label='Title'
						placeholder='Something happend last night'
						value={formData.title}
						onChange={(e) => setFormData({ ...formData, title: e.target.value })}
					/>
				</div>
				<div>
					<label
						htmlFor='category'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Category
					</label>
					<select
						id='category'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						required
						value={formData.category}
						onChange={(e) => setFormData({ ...formData, category: e.target.value })}
					>
						<option value='criminal'>Criminal</option>
						<option value='CA'>International</option>
						<option value='FR'>France</option>
						<option value='DE'>Germany</option>
					</select>
				</div>
			</div>
			<div>
				<label
					htmlFor='content'
					className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
				>
					Content
				</label>
				<textarea
					required
					id='content'
					rows={16}
					className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					placeholder='Write the post content here please...'
					value={formData.content}
					onChange={(e) => setFormData({ ...formData, content: e.target.value })}
				></textarea>
			</div>
			<Button type='submit'>Submit</Button>
		</form>
	)
}

const FormInput = (props: {
	label: string
	placeholder: string
	type?: string
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
	return (
		<div>
			<label
				htmlFor={props.label}
				className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
			>
				{props.label}
			</label>
			<input
				type={props.type || 'text'}
				id={props.label}
				className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
				placeholder={props.placeholder}
				required
				value={props.value}
				onChange={props.onChange}
			/>
		</div>
	)
}
