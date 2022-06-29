import { Response, Request } from 'express';
import { get } from './decorators/routes'
import { controller } from './decorators/controller'

interface ReqBody extends Request{
    // body:
}

@controller('/auth')
class AuthController{
    @get('/login')
    Login(req: ReqBody, res: Response) {
        res.send('hello your decorator function actually worked')   
    }
}








