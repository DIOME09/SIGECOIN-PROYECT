import express from 'express'
import categoriasRoutes from './routes/categorias.routes.js'
import entradasRoutes from './routes/entradas.routes.js'
import indexRoutes from './routes/index.routes.js'
//import facturaRoutes from './routes/factura.routes.js'
//import metododepagoRoutes from './routes/metododepago.routes.js'
//import envioRoutes from './routes/envio.routes.js'

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api',categoriasRoutes)
app.use('/api',entradasRoutes)
app.use('/api',clienteRoutes)
app.use('/api',adminRoutes)
app.use('/api',rolesRoutes)

//app.use('/api',facturaRoutes)
//app.use('/api',metododepagoRoutes)
//app.use('/api',envioRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Metododepago no encontrado'
    })
})

export default app