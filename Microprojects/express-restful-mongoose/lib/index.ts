// TODO: Create Express Server
import express from 'express'
import mongoose from 'mongoose'
import compression from 'compression'
import cors from 'cors'

import { MONGODB_URL } from './utils/env'

import { AlbumRouter } from './routers/album.router'

export class ServerInstance {
	public app: express.Application

	constructor() {
		this.app = express()
		this.middleware()
		this.routes()
		this.database()
	}

	// Implementation of middleware
	public middleware(): void {
		this.app.use(express.json())
		this.app.use(express.urlencoded({ extended: false }))
		this.app.use(cors())
		this.app.use(compression())
	}

	// Configuration of routers
	public routes(): void {
		this.app.use('/album', new AlbumRouter().router)
	}

	// Private database connection
	private database() {
		const connection = mongoose.connection

		// Error Handling of Database Connection
		connection.on('connected', () => {
			console.log('Mongo Connection Established')
		})
		connection.on('reconnected', () => {
			console.log('Mongo Connection Reestablished')
		})
		connection.on('disconnected', () => {
			console.log('Mongo Connection Disconnected')
			console.log('Trying to reconnect to Mongo ...')
			setTimeout(() => {
				mongoose.connect(MONGODB_URL, {
					autoReconnect: true, // useless
					keepAlive: true, // useless
					socketTimeoutMS: 3000,
					connectTimeoutMS: 3000,
					useNewUrlParser: true,
					useUnifiedTopology: true,
				})
			}, 3000)
		})
		connection.on('close', () => {
			console.log('Mongo Connection Closed')
		})
		connection.on('error', (error: Error) => {
			console.log('Mongo Connection ERROR: ' + error)
		})

		async function run() {
			await mongoose.connect(MONGODB_URL, {
				autoReconnect: true, // useless
				keepAlive: true, // useless
				socketTimeoutMS: 3000,
				connectTimeoutMS: 3000,
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
		}
		run().catch((e) => console.error(e))
	}

	// Runs an application
	public runtime() {
		this.app.listen(3600, () => {
			console.log('API is running at http://localhost:3600')
		})
	}
}

new ServerInstance().runtime()
