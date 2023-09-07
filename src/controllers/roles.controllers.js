import { pool } from '../db.js'

export const getRoles = async (req,res) => {
    const [rows] = await pool.query('SELECT * FROM roles')
    res.json(rows)
}




export const getRole = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM roles WHERE id_roles = ?', [
            req.params.id_roles
        ]);

        if(rows.length <= 0)
         return res.status(404).json({
            message: 'Roles no encontrados',
          });
        res.json(rows[0]);
      } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
      }
 };




export const createRoles = async (req,res) => {
    try {
        const {nombre_rol, descripcion} = req.body
        const [rows] = await pool.query(
          'INSERT INTO roles (nombre_rol, descripcion) VALUES(?, ?)', 
          [nombre_rol, descripcion]
        );
        res.send({
            id_roles: rows.insertId,
            nombre_rol, 
            descripcion
        });
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
};




export const updateRole = async (req,res) => {
    try {
        const {id_roles} = req.params
        const {nombre_rol, descripcion} = req.body

        const [rows] = await pool.query(
          'UPDATE roles SET nombre_rol = IFNULL(?, nombre_rol), descripcion = IFNULL(?, descripcion) WHERE id_roles = ?',
          [nombre_rol, descripcion]
        );
        
        if (rows.affectedRows === 0) {
            return res.status(404).json({
                message: 'Rol no encontrado'
            });
        }

        res.json({
            message: 'Rol actualizado exitosamente',
            roles_id: id_roles,
            nombre_rol, 
            descripcion
        });
    } catch (error) {
        console.error('Error al actualizar un rol:', error);
        return res.status(500).json({
            message: 'Algo va mal',
        });
    }
}




export const deleteRole = async (req,res) => {
    try {
    const [result] = await pool.query('DELETE FROM roles WHERE id_roles = ?', [
        req.params.id_roles
    ]);
    
    if(result.affectedRows <= 0) 
      return res.status(404).json({
        message: 'Roles no encontrados'
      });

    res.sendStatus(204);
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
}