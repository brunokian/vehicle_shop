import { Response, Request, response } from "express";
import User from "../database/schemas/UserSchema"

class UserController {

    async create(req: Request, res: Response) {
        const { name, email, password } = req.body;

        try {
            const user = await User.create({ name, email, password
            });
            return res.status(200).json({ message: `created ${user}` })
        } catch (error) {
            return res.status(666).send({
                error: 'REGISTRATION FAILED',
                message: error.message
            })
        }
    }

    async getAll(req: Request, res: Response) {
        const result = await User.find()
        return res.status(200).json({ message: result })
    }

}

export default new UserController