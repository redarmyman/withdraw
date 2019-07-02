import * as express from 'express'
import * as cors from 'cors'
import { Withdraw } from './Withdraw'

class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    this.express.use(cors())
    const router = express.Router()

    router.get('/', (req, res) => {
      res.json({
        message: 'OK!'
      })
    })

    router.get('/withdraw', (req, res, next) => {
      try {
        res.json({
          result: Withdraw.get(req.query.entry)
        })
      } catch(err) {
        next(err)
      }
    })

    this.express.use('/', router)
    this.express.use('/withdraw', router)

    this.express.use(function (err, req, res, next) {
      console.error(err.stack)
      res.status(400).send({
        message: err.message
      })
    })
  }
}

export default new App().express
