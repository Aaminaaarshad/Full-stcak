const express =  require('express')
const dotenv =  require('dotenv').config()
const cors = require('cors')
const PORT = process.env.PORT || 5001
const taskRoutes = require('./routes/taskRoutes')
const connectDb = require('./DB/DB')
const errorHandler = require('./MiddleWare/ErrorhandlerMiddleWare')

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}))

app.use('/api/task', taskRoutes)
app.use(errorHandler)

const start = async() =>{
    await connectDb()
    app.listen(PORT, ()=>{console.log(`server is listening at port ${PORT}`)})
}

start()