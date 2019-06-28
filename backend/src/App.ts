import * as express from 'express'
import { Withdraw } from './Withdraw'

class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()

    router.get('/', (req, res) => {
      res.json({
        message: 'OK!'
      })
    })

    router.get('/withdraw', (req, res) => {
      res.json({
        result: Withdraw.get(req.query.entry)
      })
    })

    this.express.use('/', router)
    this.express.use('/withdraw', router)
  }
}

export default new App().express
