import { Router } from 'express'
import UserController from '../Controller/UserController'

const routes = Router()

routes.post('/user', UserController.create)

routes.get('/user', UserController.getAll)

export default routes