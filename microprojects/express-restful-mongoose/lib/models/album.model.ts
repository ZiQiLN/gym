import { Schema, model } from 'mongoose'

export const albumSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	performer: {
		type: String,
		required: true,
	},
	cost: {
		type: Number,
		required: true,
	},
})

export const Album = model('Album', albumSchema)
