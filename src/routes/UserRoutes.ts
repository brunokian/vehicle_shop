import { Router, Request, Response } from 'express'
import CarController from '../Controller/CarController'

const routes = Router()

routes.post('/car', (req: Request, res: Response) => { new CarController(req, res).create() })

routes.get('/car', (req: Request, res: Response) => { new CarController(req, res).getAll() })

export default routes