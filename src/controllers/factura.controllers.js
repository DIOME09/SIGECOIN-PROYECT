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
    const {nombre, descripcion /* faltan datos de la tabla */} = req.body
        const [rows] = await pool.query(
          'INSERT INTO factura (nombre, descripcion) VALUES(?, ?)',//agregar ? en values que sean la misma cantidad que los datos que pide 
          [nombre, descripcion]
        );
        res.send({
            id_factura: rows.insertId,
            nombre, 
            descripcion,
        });
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
};




export const updateFactura = async (req,res) => {
    try {
        const {id_factura} = req.params
        const {nombre, descripcion} = req.body

        const [result] = await pool.query(
          'UPDATE factura SET nombre = IFNULL(?, nombre), descripcion = IFNULL(?, descripcion) WHERE id_factura = ?',
          [nombre, descripcion, id_factura]
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