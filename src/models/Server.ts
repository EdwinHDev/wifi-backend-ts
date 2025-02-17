import 'dotenv/config'
import clientRoute from '../routes/client-route'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { Path } from '../types/path'

class Server {
  private app: express.Application
  private port: number | string
  private paths: Path[]
  public static adminToken: string

  constructor() {
    this.port = process.env.PORT || 3000
    this.app = express()
    this.middlewares()
    this.paths = [
      { path: '/api/clients', router: clientRoute },
    ]
    this.routes()
    this.listen()
  }

  private middlewares() {
    this.app.use(express.json())
    this.app.use(cookieParser())
    this.app.use(cors())
  }

  private routes() {
    this.paths.forEach(({ path, router }) => {
      this.app.use(path, router)
    })
  }

  private listen() {
    this.app.listen(this.port, () => {
      console.log(`server in: http://localhost:${this.port}`)
      console.log(`Server running on port ${this.port}`)
    })
  }
}

export default Server