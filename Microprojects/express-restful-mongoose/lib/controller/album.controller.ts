import { Request, Response } from 'express'
import { Album } from '../models/album.model'

export class AlbumController {
	public async getAlbums(req: Request, res: Response): Promise<void> {
		const albums = await Album.find()
		res.json({ data: albums })
	}

	public async getAlbum(req: Request, res: Response): Promise<void> {
		const album = await Album.findOne({
			_id: req.params.id,
		})

		if (album === null) res.status(404)
		res.json({ data: album })
	}

	public async createAlbum(req: Request, res: Response): Promise<void> {
		const newAlbum = new Album(req.body)
		const createdAlbum = await newAlbum.save()
		res.json(createdAlbum)
	}

	public async updateAlbum(req: Request, res: Response): Promise<void> {
		const album = await Album.findOneAndUpdate(
			{
				_id: req.params.id,
			},
			req.body
		)
		if (album === null) res.status(404)
		const updatedAlbum = {
			...req.body,
		}
		res.json({
			data: updatedAlbum,
		})
	}
	public async deleteAlbum(req: Request, res: Response): Promise<void> {
		const album = await Album.findOneAndDelete({
			_id: req.params.id,
		})

		if (album === null) res.status(404)
		res.status(204)
	}
}
