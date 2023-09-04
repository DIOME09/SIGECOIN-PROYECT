import { pool } from '../db.js'

export const getEntradas = async( req, res) =>{
    const [rows] = await pool.query('SELECT * FROM entradas')
    res.json(rows)
}




export const getEntrada = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM entradas WHERE id_entradas = ?', [
            req.params.id_entradas
        ]);

        if(rows.length <= 0)
         return res.status(404).json({
            message: 'Entrada no encontrada',
          });
        res.json(rows[0]);
      } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
      }
 };




export const createEntradas = async (req,res) => {
    try {
        const {id_productos, cantidad} = req.body
        const [rows] = await pool.query(
          'INSERT INTO entradas (id_productos, cantidad) VALUES(?, ?)', 
          [id_productos, cantidad]
        );
        res.send({
            id_entradas: rows.insertId,
            id_productos, 
            cantidad
        });
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
};




export const updateEntrada = async (req,res) => {
    try {
        const {id_entradas} = req.params
        const {id_productos, cantidad} = req.body

        const [result] = await pool.query(
          'UPDATE entradas SET id_productos = IFNULL(?, id_productos), cantidad = IFNULL(?, cantidad) WHERE id_entradas = ?',
          [id_productos, cantidad, id_entradas]
          
        );
        
        if (rows.affectedRows === 0) {
            return res.status(404).json({
                message: 'Entrada no encontrada'
            });
        }

        res.json({
            message: 'Entrada actualizada exitosamente',
            entrada_id: id_entradas,
            id_productos, 
            cantidad
        });
    } catch (error) {
        console.error('Error al actualizar una entrada:', error);
        return res.status(500).json({
            message: 'Algo va mal',
        });
    }
}





export const deleteEntrada = async (req,res) => {
    try {
    const [result] = await pool.query('DELETE FROM entradas WHERE id_entradas = ?', [
        req.params.id_entradas
    ]);
    
    if(result.affectedRows <= 0) 
      return res.status(404).json({
        message: 'Entrada no encontrada'
      });

    res.sendStatus(204);
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
}