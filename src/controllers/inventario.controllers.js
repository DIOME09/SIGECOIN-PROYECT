import { pool } from '../db.js'

export const getinventarios = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM inventario')
        res.json(rows)
    }catch (error) {
        return res.status(500).json({
            message:'Algo va mal'
        })
    }
    
}




export const getinventario = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM inventario WHERE id_inventario = ?', [
            req.params.id
        ]);

        if(rows.length <= 0)
         return res.status(404).json({
            message: 'inventario no encontrado',
          });
        res.json(rows[0]);
      } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
      }
 };




export const createinventarios = async (req,res) => {
    try {
        const {id_producto} = req.body
        const [rows] = await pool.query(
          'INSERT INTO inventario (id_producto) VALUES(?)', 
          [id_producto]
        );
        res.send({
            id_inventario: rows.insertId,
            id_producto,
        });
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
};




export const updateinventario = async (req,res) => {
    try {
        const {id_inventario} = req.params
        const {id_producto} = req.body

        const [result] = await pool.query(
          'UPDATE inventario SET id_producto = IFNULL(?, id_producto) WHERE id_inventario = ?',
          [id_producto,id_inventario]
        );
        
        if(result.affectedRows === 0) 
          return res.status(404).json({
            message: 'inventario no encontrado'
        });

        const [rows] = await pool.query('SELECT * FROM inventario WHERE id_inventario = ?', [
            id_inventario,
            id_producto,
            
        ]);
        res.json(rows[0])
      } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
 
    }
    
}




export const deleteinventario = async (req,res) => {
    try {
    const [result] = await pool.query('DELETE FROM inventario WHERE id_inventario = ?', [
        req.params.id_inventario
    ]);
    
    if(result.affectedRows <= 0) 
      return res.status(404).json({
        message: 'inventario no encontrado'
      });

    res.sendStatus(204);
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
}