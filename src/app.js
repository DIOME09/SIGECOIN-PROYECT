import express from 'express'
import categoriasRoutes from './routes/categorias.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api',categoriasRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'EndPoint no encontrado'
    })
})

export default app