import { pool } from '../db.js'

export const getadmins = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM admin')
        res.json(rows)
    }catch (error) {
        return res.status(500).json({
            message:'Algo va mal'
        })
    }
    
}




export const getAdmin = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM admin WHERE id_admin = ?', [
            req.params.id
        ]);

        if(rows.length <= 0)
         return res.status(404).json({
            message: 'admin no encontrada',
          });
        res.json(rows[0]);
      } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
      }
 };




export const createadmin = async (req,res) => {
    try {
        const {nombre, email, contraseña, telefono, direccion} = req.body
        const [rows] = await pool.query(
          'INSERT INTO admin (nombre, email, contraseña, telefono, direccion) VALUES(?, ?)', 
          [nombre, email, contraseña, telefono, direccion]
        );
        res.send({
            id_admin: rows.insertId,
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




export const updateadmin = async (req,res) => {
    try {
        const {id_admin} = req.params
        const {nombre, email, contraseña, telefono, direccion } = req.body

        const [result] = await pool.query(
          'UPDATE admin SET nombre = IFNULL(?, nombre), email = IFNULL(?, email) contraseña = IFNULL(?, contraseña) telefono = IFNULL(?, telefono) direccion = IFNULL(?, direccion)  WHERE id_admin = ?',
          [nombre, email, contraseña, telefono, direccion, id_admin]
        );
        
        if(result.affectedRows === 0) 
          return res.status(404).json({
            message: 'admin no encontrada'
        });

        const [rows] = await pool.query('SELECT * FROM admin WHERE id_admin = ?', [
            id_admin,
        ]);
        res.json(rows[0])
      } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
 
    }
    
}




export const deleteadmin = async (req,res) => {
    try {
    const [result] = await pool.query('DELETE FROM admin WHERE id_admin = ?', [
        req.params.id_admin
    ]);
    
    if(result.affectedRows <= 0) 
      return res.status(404).json({
        message: 'admin no encontrada'
      });

    res.sendStatus(204);
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
}