import express from "express";
import employessRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api',employessRoutes)

app.use((req, res, next) =>{
    res.status(404).json({
        message: 'EndPoint No Encontrado'
    })
})

export default app