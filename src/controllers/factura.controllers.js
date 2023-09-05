import { pool } from '../db.js'

export const getFacturas = async( req, res) =>{
    const [rows] = await pool.query('SELECT * FROM facturas')
    res.json(rows)
}




export const getFactura = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM facturas WHERE id_facturas = ?', [
            req.params.id_factura
        ]);

        if(rows.length <= 0)
         return res.status(404).json({
            message: 'Factura no encontrada',
          });
        res.json(rows[0]);
      } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
      }
 };




export const createFacturas = async (req,res) => {
    try {
        const {id_cliente, id_productos, precioUnitario, precioTotal, id_pago, id_envio} = req.body
        const [rows] = await pool.query(
          'INSERT INTO facturas (id_cliente, id_productos, precioUnitario, precioTotal, id_pago, id_envio) VALUES(?, ?, ?, ?, ?, ?)', 
          [id_cliente, id_productos, precioUnitario, precioTotal, id_pago, id_envio]
        );
        res.send({
            id_factura: rows.insertId,
            id_cliente,
            id_productos,  
            precioUnitario, 
            precioTotal, 
            id_pago, 
            id_envio,
        });
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
};




export const updateFactura = async (req,res) => {
    try {
        const {id_facturas} = req.params
        const {id_cliente, id_productos, precioUnitario, precioTotal, id_pago, id_envio} = req.body

        const [result] = await pool.query(
          'UPDATE facturas SET id_cliente = IFNULL(?, id_cliente), id_productos = IFNULL(?, id_productos), precioUnitario = IFNULL(?, precioUnitario), precioTotal = IFNULL(?, precioTotal), id_pago = IFNULL(?, id_pago), id_envio = IFNULL(?, id_envio) WHERE id_facturas = ?',
          [id_cliente, id_productos, precioUnitario, precioTotal, id_pago, id_envio, id_facturas]
        );
        
        if (rows.affectedRows === 0) {
            return res.status(404).json({
                message: 'Factura no encontrada'
            });
        }

        res.json({
            message: 'Factura actualizada exitosamente',
            factura_id: id_facturas,
            id_cliente, 
            id_productos, 
            precioUnitario, 
            precioTotal, 
            id_pago, 
            id_envio
        });
    } catch (error) {
        console.error('Error al actualizar una factura:', error);
        return res.status(500).json({
            message: 'Algo va mal',
        });
    }
}




export const deleteFactura = async (req,res) => {
    try {
    const [result] = await pool.query('DELETE FROM facturas WHERE id_facturas = ?', [
        req.params.id_facturas
    ]);
    
    if(result.affectedRows <= 0) 
      return res.status(404).json({
        message: 'Factura no encontrada'
      });

    res.sendStatus(204);
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
}