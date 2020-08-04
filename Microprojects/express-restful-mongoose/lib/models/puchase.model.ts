import mongoose from 'mongoose'

export const purchaseSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	album: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Album',
	},
})

export const Purchase = mongoose.model('Purchase', purchaseSchema)
