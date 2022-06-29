import {config} from 'dotenv'
config()
import App from './app'
import http from 'http'

const server = http.createServer(App)

const port: string|undefined = process.env.PORT

function startServer(server:any):void {
    server.listen(port, () => {
        console.log(`${process.env.NODE_ENV}:: crytpo wallet running on ${port}` )
    })
}

startServer(server)