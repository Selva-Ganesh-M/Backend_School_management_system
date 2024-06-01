import express, { Request, Response } from "express"
import env_config from "./config/env_config"

const server = express()
server.get("/health", (req: Request, res: Response)=>{
    res.status(200).json({
    statusText: 'success',
    message: 'server is healthy',
    payload: null
    })
})

console.log(process.env.NODE_ENV)

server.listen(env_config.SERVER_PORT as number, env_config.SERVER_URL, ()=>{
    console.log(`server listening on port ${env_config.SERVER_PORT}`)
})