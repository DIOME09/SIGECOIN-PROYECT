import { pool } from '../db.js'

export const getmetododepagos = async (req,res) => {
    const [rows] = await pool.query('SELECT * FROM metododepago')
    res.json(rows)
}




export const getmetododepago = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM metododepago WHERE id_pago = ?', [
            req.params.id
        ]);

        if(rows.length <= 0)
         return res.status(404).json({
            message: 'Metododepago no encontrada',
          });
        res.json(rows[0]);
      } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
      }
 };




export const createmetododepagos = async (req,res) => {
    try {
        const {id_pago, metodo_pago, condicion_pago} = req.body
        const [rows] = await pool.query(
          'INSERT INTO metododepago (nombre,descripcion) VALUES(?, id_pago, metodo_pago, condicion_pago  ?)', 
          [id_pago, metodo_pago, condicion_pago]
        );
        res.send({
            id_pago: rows.insertId,
            metodo_pago,
            condicion_pago,
        });
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
};




export const updatemetododepago = async (req,res) => {
    try {
        const {metododepago} = req.params
        const {id_pago, metodo_pago, condicion_pago} = req.body

        const [result] = await pool.query(
          'UPDATE metododepago SET id_pago = IFNULL(?, id_pago), descripcion = IFNULL(?,condicion_pago) WHERE id_metododepago = ?',
          [id_pago, metodo_pago, condicion_pago]
        );
        
        if (rows.affectedRows === 0) {
            return res.status(404).json({
                message: 'Metodo de pago no encontrado'
            });
        }

        res.json({
            message: 'Metodo de pago actualizado exitosamente',
            metododepago_id: id_metododepago,
            id_pago, 
            metodo_pago, 
            condicion_pago
        });

        const [rows] = await pool.query('SELECT * FROM metododepago WHERE id_metododepago = ?', [
            id_metododepago,
        ]);
        res.json(rows[0])
      } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal',
        });
    }
}




export const deletemetododepago = async (req,res) => {
    try {
    const [result] = await pool.query('DELETE FROM categorias WHERE id_metododepago = ?', [
        req.params.id_metododepago
    ]);
    
    if(result.affectedRows <= 0) 
      return res.status(404).json({
        message: 'Metododepago no encontrada'
      });

    res.sendStatus(204);
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
}