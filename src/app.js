import express from 'express'
import categoriasRoutes from './routes/categorias.routes.js'
import ingresosRoutes from './routes/ingresos.routes.js'
import indexRoutes from './routes/index.routes.js'
import proveedoresRoutes from './routes/proveedores.routes.js'
import facturasRoutes from './routes/factura.routes.js'
import metododepagoRoutes from './routes/metododepago.routes.js'
import envioRoutes from './routes/envio.routes.js'
import inventarioRoutes from './routes/inventario.routes.js'
import rolesRoutes from './routes/roles.routes.js'
import usuariosRoutes from './routes/usuarios.routes.js'
import productosRoutes from './routes/productos.routes.js'






const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api',categoriasRoutes)
app.use('/api',ingresosRoutes)
app.use('/api',proveedoresRoutes)
app.use('/api',usuariosRoutes)
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