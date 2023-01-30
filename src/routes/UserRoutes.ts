import { Router, Request, Response } from 'express'
import CarController from '../Controller/CarController'
import MotoController from '../Controller/MotoController'

const routes = Router()

routes.post('/car', (req: Request, res: Response) => { new CarController(req, res).create() })

routes.get('/car', (req: Request, res: Response) => { new CarController(req, res).getAll() })

routes.post('/moto', (req: Request, res: Response) => { new MotoController(req, res).create() })

routes.get('/moto', (req: Request, res: Response) => { new MotoController(req, res).getAll() })

export default routes