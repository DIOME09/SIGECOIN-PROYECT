import { pool } from '../db.js'

export const getenvio = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM envio')
        res.json(rows)
    }catch (error) {
        return res.status(500).json({
            message:'Algo va mal'
        })
    }
    
}




export const getEnvio = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM envio WHERE id_envio = ?', [
            req.params.id
        ]);

        if(rows.length <= 0)
         return res.status(404).json({
            message: 'Envio no encontrada',
          });
        res.json(rows[0]);
      } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
      }
 };




export const createenvio = async (req,res) => {
    try {
        const {nombre, descripcion} = req.body
        const [rows] = await pool.query(
          'INSERT INTO employee (nombre, descripcion) VALUES(?, ?)', 
          [nombre, descripcion]
        );
        res.send({
            id_envio: rows.insertId,
            nombre, 
            descripcion,
        });
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
};




export const updateenvio = async (req,res) => {
    try {
        const {id_envio} = req.params
        const {nombre, descripcion} = req.body

        const [result] = await pool.query(
          'UPDATE employee SET nombre = IFNULL(?, nombre), descripcion = IFNULL(?, descripcion) WHERE id_envio = ?',
          [nombre, descripcion, id_envio]
        );
        
        if(result.affectedRows === 0) 
          return res.status(404).json({
            message: 'Envio no encontrada'
        });

        const [rows] = await pool.query('SELECT * FROM envio WHERE id_envio = ?', [
            id_envio,
        ]);
        res.json(rows[0])
      } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
 
    }
    
}




export const deleteenvio = async (req,res) => {
    try {
    const [result] = await pool.query('DELETE FROM envio WHERE id_envio = ?', [
        req.params.id_envio
    ]);
    
    if(result.affectedRows <= 0) 
      return res.status(404).json({
        message: 'Envio no encontrada'
      });

    res.sendStatus(204);
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
}