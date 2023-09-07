import { pool } from '../db.js'

export const getenvios = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM envio')
        res.json(rows)
    }catch (error) {
        return res.status(500).json({
            message:'Algo va mal'
        })
    }
    
}




export const getenvio = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM envio WHERE id_envio = ?', [
            req.params.id_envio
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




export const createenvios = async (req,res) => {
    try {
        const {id_envio, empresa} = req.body
        const [rows] = await pool.query(
          'INSERT INTO envio (id_envio, empresa) VALUES(?, ?)', 
          [id_envio, empresa]
        );
        res.send({
            id_envio: rows.insertId,
            empresa,
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
        const {empresa} = req.body

        const [rows] = await pool.query(
          'UPDATE envio SET empresa = IFNULL(?,empresa) WHERE id_envio = ?',
          [empresa, id_envio]
        );
        
        if (rows.affectedRows === 0) {
            return res.status(404).json({
                message: 'Proveedor no encontrado'
            });
        }

        res.json({
            message: 'Proveedor actualizad exitosamente',
            envio_id: id_envio,
            empresa
        });
    } catch (error) {
        console.error('Error al actualizar un proveedor:', error);
        return res.status(500).json({
            message: 'Algo va mal',
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