import { pool } from '../db.js'

export const getCategorias = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM categorias')
        res.json(rows)
    }catch (error) {
        return res.status(500).json({
            message:'Algo va mal'
        })
    }
    
}




export const getCategoria = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM categorias WHERE id_categorias = ?', [
            req.params.id
        ]);

        if(rows.length <= 0)
         return res.status(404).json({
            message: 'Categoria no encontrada',
          });
        res.json(rows[0]);
      } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
      }
 };




export const createCategorias = async (req,res) => {
    try {
        const {nombre, descripcion} = req.body
        const [rows] = await pool.query(
          'INSERT INTO employee (nombre, descripcion) VALUES(?, ?)', 
          [nombre, descripcion]
        );
        res.send({
            id_categorias: rows.insertId,
            nombre, 
            descripcion,
        });
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
};




export const updateCategoria = async (req,res) => {
    try {
        const {id_categorias} = req.params
        const {nombre, descripcion} = req.body

        const [result] = await pool.query(
          'UPDATE employee SET nombre = IFNULL(?, nombre), descripcion = IFNULL(?, descripcion) WHERE id_categorias = ?',
          [nombre, descripcion, id_categorias]
        );
        
        if(result.affectedRows === 0) 
          return res.status(404).json({
            message: 'Categoria no encontrada'
        });

        const [rows] = await pool.query('SELECT * FROM categorias WHERE id_categorias = ?', [
            id_categorias,
        ]);
        res.json(rows[0])
      } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
 
    }
    
}




export const deleteCategoria = async (req,res) => {
    try {
    const [result] = await pool.query('DELETE FROM categorias WHERE id_categorias = ?', [
        req.params.id_categorias
    ]);
    
    if(result.affectedRows <= 0) 
      return res.status(404).json({
        message: 'Categoria no encontrada'
      });

    res.sendStatus(204);
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
}