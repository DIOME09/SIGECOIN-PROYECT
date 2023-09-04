import { pool } from '../db.js'

export const getroles = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM roles')
        res.json(rows)
    }catch (error) {
        return res.status(500).json({
            message:'Algo va mal'
        })
    }
    
}




export const getRoles = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM roles WHERE id_admin = ?', [
            req.params.id
        ]);

        if(rows.length <= 0)
         return res.status(404).json({
            message: 'roles no encontrada',
          });
        res.json(rows[0]);
      } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
      }
 };




export const createroles = async (req,res) => {
    try {
        const {id_admin, id_cliente} = req.body
        const [rows] = await pool.query(
          'INSERT INTO roles (id_admin, id_cliente) VALUES(?, ?)', 
          [id_admin, id_cliente]
        );
        res.send({
            roles: rows.insertId,
            id_admin, 
            id_cliente
        });
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
};




export const updateroles = async (req,res) => {
    try {
        const {roles} = req.params
        const {id_admin, id_cliente} = req.body

        const [result] = await pool.query(
          'UPDATE roles SET id_admin = IFNULL(?, id_admin), id_clientes = IFNULL(?, id_cliente) WHERE roles = ?',
          [id_admin, id_cliente]
        );
        
        if(result.affectedRows === 0) 
          return res.status(404).json({
            message: 'roles no encontrada'
        });

        const [rows] = await pool.query('SELECT * FROM roles WHERE roles = ?', [
            roles,
        ]);
        res.json(rows[0])
      } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
 
    }
    
}




export const deleteroles = async (req,res) => {
    try {
    const [result] = await pool.query('DELETE FROM roles WHERE roles = ?', [
        req.params.roles
    ]);
    
    if(result.affectedRows <= 0) 
      return res.status(404).json({
        message: 'roles no encontrada'
      });

    res.sendStatus(204);
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
}