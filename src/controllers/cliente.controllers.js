import { pool } from '../db.js'

export const getcliente = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM cliente')
        res.json(rows)
    }catch (error) {
        return res.status(500).json({
            message:'Algo va mal'
        })
    }
    
}




export const getCliente = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM cliente WHERE id_cliente = ?', [
            req.params.id
        ]);

        if(rows.length <= 0)
         return res.status(404).json({
            message: 'Cliente no encontrada',
          });
        res.json(rows[0]);
      } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
      }
 };




export const createcliente = async (req,res) => {
    try {
        const {nombre, email, contraseña, telefono, direccion} = req.body
        const [rows] = await pool.query(
          'INSERT INTO employee (nombre, email, contraseña, telefono, direccion) VALUES(?, ?)', 
          [nombre, email, contraseña, telefono, direccion]
        );
        res.send({
            id_cliente: rows.insertId,
            nombre, 
            email,
            contraseña,
            telefono,
            direccion

        });
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
};




export const updatecliente = async (req,res) => {
    try {
        const {id_cliente} = req.params
        const {nombre, email, contraseña, telefono, direccion } = req.body

        const [result] = await pool.query(
          'UPDATE employee SET nombre = IFNULL(?, nombre), email = IFNULL(?, email) contraseña = IFNULL(?, contraseña) telefono = IFNULL(?, telefono) direccion = IFNULL(?, direccion)  WHERE id_cliente = ?',
          [nombre, email, contraseña, telefono, direccion, id_cliente]
        );
        
        if(result.affectedRows === 0) 
          return res.status(404).json({
            message: 'Cliente no encontrada'
        });

        const [rows] = await pool.query('SELECT * FROM cliente WHERE id_cliente = ?', [
            id_cliente,
        ]);
        res.json(rows[0])
      } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
 
    }
    
}




export const deletecliente = async (req,res) => {
    try {
    const [result] = await pool.query('DELETE FROM cliente WHERE id_cliente = ?', [
        req.params.id_cliente
    ]);
    
    if(result.affectedRows <= 0) 
      return res.status(404).json({
        message: 'Cliente no encontrada'
      });

    res.sendStatus(204);
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
}