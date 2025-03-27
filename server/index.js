import express from 'express'
import connectDB from './config/db.js'
import userRouter from './modules/user/user.route.js'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())

connectDB()

app.get("/", (req, res) => {
    res.json({"Status" : "Ok"})
})

app.use('/api/user', userRouter)

app.listen(3000, () => {
    console.log('http://loachost:3000')
})