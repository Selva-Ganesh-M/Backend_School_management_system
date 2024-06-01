import dotenv from "dotenv"
dotenv.config()
const localhost = "127.0.0.1"
export default {
    db: {
       DB_HOST: process.env.DB_HOST || localhost, 
       DB_USER: process.env.DB_USER || "root", 
       DB_PASSWORD: process.env.DB_PASSWORD, 
       DB_NAME: process.env.DB_NAME, 
    },
    SERVER_PORT: process.env.SERVER_PORT || 3000,
    SERVER_URL: process.env.SERVER_URL || localhost
}
