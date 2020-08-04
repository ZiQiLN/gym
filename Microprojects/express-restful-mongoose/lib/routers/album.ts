import { Request, Response } from 'express'
import { Album } from '../models/album.model'

export class AlbumController {
	public async getAlbums(req: Request, res: Response): Promise<void> {
        const albums = await Album.find()
        res.json()
    }
	public async getAlbum(req: Request, res: Response): Promise<void> {}
	public async createAlbum(req: Request, res: Response): Promise<void> {}
	public async updateAlbum(req: Request, res: Response): Promise<void> {}
	public async deleteAlbum(req: Request, res: Response): Promise<void> {}
}
