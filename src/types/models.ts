// model, model adalah sebuah tipe data yang digunakan untuk mendeskripsikan sebuah tabel pada database
// tipe data pada model harus identik dengan tipe data pada tabel database
// pada bahasa pemrograman Typecript, tipe data bisa di definisikan dengan menggunakan interface atau type

export interface Users {
	id: string
	username: string
	password: string
	imageUrl?: string
	createdAt: string
}

export interface News {
	id: string
	title: string
	content: string
	thumbnailUrl: string
	createdAt: string
	userId: string
	description: string
	category: string
}
