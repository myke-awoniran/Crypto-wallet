import express from 'express';
import parser from 'body-parser';
import router  from './routes/auth'
import {router as controllerRouter} from './controllers/decorators/controller';
import cors from 'cors';

import './controllers/authController'

const app = express()
app.use(cors())

app.use([parser.urlencoded({ extended: true })])

app.use(router)
app.use(controllerRouter)

// app.use('*')
export= app