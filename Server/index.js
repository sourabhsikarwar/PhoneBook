import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import authRouter from './routes/authRoutes'
import contactRouter from './routes/contactRoutes'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json({ limit: '50mb'}))

// Main api page 
app.get('/', async (req, res) => {
    res.send('Hello From Contact List App')
})

// Routes 
app.use('/auth', authRouter)
app.use('/contact', contactRoute)

const startServer = () => {
    try {
        connectDB()
        app.listen(8080, () => {
            console.log('Server running on http://localhost:8080')
        })
    } catch (error) {
        console.log(error.message)
    }
}

startServer()
