import { Router } from "express";
import app, { route } from "../app";
import { router as controllerRouter } from '../controllers/decorators/controller'
const router = Router()


// router.get('/sign-in', (req: Request, res: Response) => {
//     res.send('hello, crypto server is responding')
// })
router.use(controllerRouter);
// router.post('/login',HttpLogin)

export =router