import { pool } from '../db.js'
export const getproductos = async( req, res) =>{
    const [rows] = await pool.query('SELECT * FROM productos')
    res.json(rows)
}





export const getproducto = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM productos WHERE id_productos = ?', [req.params.id_productos]);

        if(rows.length <= 0)
         return res.status(404).json({
            message: 'producto no encontrado',
          });
        res.json(rows[0]);
      } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
      }
 };




export const createproductos = async (req,res) => {
    try {
        const {nombre, descripcion, precio, cant_disponible, id_categorias } = req.body
        const [rows] = await pool.query(
          'INSERT INTO productos (nombre, descripcion, precio, cant_disponible, id_categorias) VALUES(?, ?)', //falta ?????
          [nombre, descripcion, precio, cant_disponible, id_categorias]
        );
        res.send({
            id_productos: rows.insertId,
            nombre, 
            descripcion,
            precio,
            cant_disponible,
            id_categorias
        });
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
};




export const updateproducto = async (req,res) => {
    try {
        const {id_productos} = req.params
        const {nombre, descripcion, precio, cant_disponible, id_categorias} = req.body

        const [rows] = await pool.query(
          'UPDATE productos SET nombre = IFNULL(?, nombre), descripcion = IFNULL(?, descripcion), precio = IFNULL(?, precio), cant_disponible = IFNULL (?,cant_disponible), id_categorias = IFNULL (?, id_categorias) WHERE id_productos = ?',
          [nombre, descripcion, precio, cant_disponible, id_categorias, id_productos ]
        );
        
        if (rows.affectedRows === 0) {
            return res.status(404).json({
                message: 'producto no encontrado'
            });
        }

        res.json({
            message: 'producto actualizado exitosamente',
            productos_id: id_productos,
            nombre,
            descripcion,
            precio,
            cant_disponible,
            id_categorias

        });
    } catch (error) {
        console.error('Error al actualizar una producto:', error);
        return res.status(500).json({
            message: 'Algo va mal',
        });
    }
}




export const deleteproducto = async (req,res) => {
    try {
    const [result] = await pool.query('DELETE FROM productos WHERE id_productos = ?', [
        req.params.id_productos
    ]);
    
    if(result.affectedRows <= 0) 
      return res.status(404).json({
        message: 'producto no encontrada'
      });

    res.sendStatus(204);
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
}