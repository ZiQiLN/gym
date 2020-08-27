import mongoose from 'mongoose'

export const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
})

export const Album = mongoose.model('User', userSchema)
