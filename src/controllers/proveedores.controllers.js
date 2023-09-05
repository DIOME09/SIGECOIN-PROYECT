import { pool } from '../db.js'

export const getProveedores = async( req, res) =>{
    const [rows] = await pool.query('SELECT * FROM proveedores')
    res.json(rows)
}




export const getProveedor = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM proveedores WHERE id_proveedores = ?', [
            req.params.id_proveedores
        ]);

        if(rows.length <= 0)
         return res.status(404).json({
            message: 'Proveedor no encontrado',
          });
        res.json(rows[0]);
      } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
      }
 };




export const createProveedores = async (req,res) => {
    try {
        const {nombre, email, telefono, id_productos, direccion} = req.body
        const [rows] = await pool.query(
          'INSERT INTO proveedores (nombre, email, telefono, id_productos, direccion) VALUES(?, ?, ?, ?, ?)', 
          [nombre, email, telefono, id_productos, direccion]
        );
        res.send({
            id_proveedores: rows.insertId,
            nombre, 
            email,
            telefono,
            id_productos,
            direccion,
        });
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
};




export const updateProveedor = async (req,res) => {
    try {
        const {id_proveedores} = req.params
        const {nombre, email, telefono, id_productos, direccion} = req.body

        const [result] = await pool.query(
          'UPDATE proveedores SET nombre = IFNULL(?, nombre), email = IFNULL(?, email), telefono = IFNULL(?, telefono), id_productos = IFNULL(?, id_productos), direccion = IFNULL(?, direccion) WHERE id_proveedores = ?',
          [nombre, email, telefono, id_productos, direccion, id_proveedores]
        );
        
        if (rows.affectedRows === 0) {
            return res.status(404).json({
                message: 'Proveedor no encontrado'
            });
        }

        res.json({
            message: 'Proveedor actualizad exitosamente',
            proveedores_id: id_proveedores,
            nombre, 
            email, 
            telefono, 
            id_productos, 
            direccion
        });
    } catch (error) {
        console.error('Error al actualizar un proveedor:', error);
        return res.status(500).json({
            message: 'Algo va mal',
        });
    }
}



export const deleteProveedor = async (req,res) => {
    try {
    const [result] = await pool.query('DELETE FROM proveedores WHERE id_proveedores = ?', [
        req.params.id_proveedores
    ]);
    
    if(result.affectedRows <= 0) 
      return res.status(404).json({
        message: 'Proveedor no encontrado'
      });

    res.sendStatus(204);
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
}