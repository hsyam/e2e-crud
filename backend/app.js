import express from "express"
import cors from 'cors'
import UsersV1 from './app/routes/api/v1/user'
import './app/config'
/**
 * App Setup
 */
require('dotenv').config({path: './.env'})
const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cors())

/**
 * Routes
 */
app.use('/api/v1/users',UsersV1)

/**
 * Bootstrap 
 */
app.listen(process.env.PORT)