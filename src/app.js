import express from 'express'
import categoriasRoutes from './routes/categorias.routes.js'
import entradasRoutes from './routes/entradas.routes.js'
import indexRoutes from './routes/index.routes.js'
import proveedoresRoutes from './routes/proveedores.routes.js'
import facturasRoutes from './routes/factura.routes.js'
import metododepagoRoutes from './routes/metododepago.routes.js'
import envioRoutes from './routes/envio.routes.js'
import inventarioRoutes from './routes/inventario.routes.js'
import clienteRoutes from './routes/cliente.routes.js'
import adminRoutes from './routes/admin.routes.js'
import rolesRoutes from './routes/roles.routes.js'
import productosRoutes from './routes/productos.routes.js'






const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api',categoriasRoutes)
app.use('/api',entradasRoutes)
app.use('/api',proveedoresRoutes)
app.use('/api',clienteRoutes)
app.use('/api',adminRoutes)
app.use('/api',rolesRoutes)
app.use('/api',inventarioRoutes)
app.use('/api',facturasRoutes)
app.use('/api',metododepagoRoutes)
app.use('/api',envioRoutes)
app.use('/api',productosRoutes)


app.use((req, res, next) => {
    res.status(404).json({
        message: 'Algo va mal'
    })
})

export default app