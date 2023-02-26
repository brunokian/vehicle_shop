import { Router, Request, Response } from 'express'
import CarController from '../Controller/CarController'
import MotoController from '../Controller/MotoController'

const routes = Router()

routes.post('/carPage', (req: Request, res: Response) => { new CarController(req, res).create() })

routes.get('/carPage', (req: Request, res: Response) => { new CarController(req, res).getAll() })

routes.post('/motoPage', (req: Request, res: Response) => { new MotoController(req, res).create() })

routes.get('/motoPage', (req: Request, res: Response) => { new MotoController(req, res).getAll() })

routes.get('/motoPage/:id', (req: Request, res: Response) => { new MotoController(req, res).getById() })

routes.get('/motoPage/:id/type', (req: Request, res: Response) => { new MotoController(req, res).getType() })

routes.delete('/motoPage', (req: Request, res: Response) => { new MotoController(req, res).deleteAll() })

routes.delete('/carPage', (req: Request, res: Response) => { new CarController(req, res).deleteAll() })

export default routes