import { Router } from 'express'
import { AlbumController } from '../controller/album.controller'

export class AlbumRouter {
	public router: Router
	public controller: AlbumController = new AlbumController()

	constructor() {
		this.router = Router()
		this.routes()
	}

	routes() {
		this.router.get('/', this.controller.getAlbums)
		this.router.get('/:id', this.controller.getAlbum)
		this.router.post('/', this.controller.createAlbum)
		this.router.put('/:id', this.controller.updateAlbum)
		this.router.delete('/:id', this.controller.deleteAlbum)
	}
}
