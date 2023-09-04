import { pool } from '../dbjs'
// corregir el nombre de la tabla de la db en toda esta pagina esta llamando a employee y es factura
export const getFactura = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM factura')
        res.json(rows)
    }catch (error) {
        return res.status(500).json({
            message:'Algo va mal'
        })
    }

};
// faltaba };
export const getfactura = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM factura WHERE id_factura = ?', [
            req.params.id
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




export const createFactura = async (req,res) => {
    try {
    const {id_factura, id_cliente, fechaemicion,id_productos,cantidad,preciounitario,preciototal,id_pago,id_envio} = req.body
        const [rows] = await pool.query(
          'INSERT INTO factura (nombre, descripcion) VALUES(?,id_factura, id_cliente, fechaemicion,id_productos,cantidad,preciounitario,preciototal,id_pago,id_envio ?)',
          [id_factura, id_cliente, fechaemicion,id_productos,cantidad,preciounitario,preciototal,id_pago,id_envio]
        );
        res.send({
            id_factura: rows.insertId,
            id_factura, 
            id_cliente, 
            fechaemicion,
            id_productos,
            cantidad,
            preciounitario,
            preciototal,
            id_pago,id_envio
        });
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
};




export const updateFactura = async (req,res) => {
    try {
        const {factura} = req.params
        const {id_factura, id_cliente, fechaemicion,id_productos,cantidad,preciounitario,preciototal,id_pago,id_envio} = req.body

        const [result] = await pool.query(
          'UPDATE factura SET id_factura = IFNULL(?,id_factura), descripcion = IFNULL(?, descripcion) WHERE id_factura = ?',
          [id_factura, id_cliente, fechaemicion,id_productos,cantidad,preciounitario,preciototal,id_pago,id_envio]
        );
        
        if(result.affectedRows === 0) 
          return res.status(404).json({
            message: 'Factura no encontrada'
        });

        const [rows] = await pool.query('SELECT * FROM factura WHERE id_factura = ?', [
            id_factura,
        ]);
        res.json(rows[0])
      } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
 
    }
    
}




export const deleteFactura = async (req,res) => {
    try {
    const [result] = await pool.query('DELETE FROM categorias WHERE id_factura = ?', [
        req.params.id_factura
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