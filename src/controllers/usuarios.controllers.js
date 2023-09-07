import { pool } from '../db.js'

export const getUsuarios = async (req,res) => {
    const [rows] = await pool.query('SELECT * FROM usuarios')
    res.json(rows)
}




export const getUsuario = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM usuario WHERE id_usuario = ?', [
            req.params.id_usuario
        ]);

        if(rows.length <= 0)
         return res.status(404).json({
            message: 'Usuarios no encontrada',
          });
        res.json(rows[0]);
      } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
      }
 };




export const createUsuarios = async (req,res) => {
    try {
        const {tipodedocumento, num_documento, nombres, apellidos, direccion, email, contraseña, id_roles} = req.body
        const [rows] = await pool.query(
          'INSERT INTO usuarios (tipodedocumento, num_documento, nombres, apellidos, direccion, email, contraseña, id_roles) VALUES(?, ?, ?, ?, ?, ?, ?, ?)', 
          [tipodedocumento, num_documento, nombres, apellidos, direccion, email, contraseña, id_roles]
        );
        res.send({
            id_usuario: rows.insertId,
            tipodedocumento, 
            num_documento, 
            nombres, 
            apellidos, 
            direccion, 
            email, 
            contraseña, 
            id_roles

        });
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
};




export const updateUsuario = async (req,res) => {
    try {
        const {id_usuario} = req.params
        const {tipodedocumento, num_documento, nombres, apellidos, direccion, email, contraseña, id_roles } = req.body

        const [rows] = await pool.query(
          'UPDATE usuario SET tipodedocumento = IFNULL(?, tipodedocumento), num_documento = IFNULL(?, num_documento), nombres = IFNULL(?, nombres), apellidos = IFNULL(?, apellidos), direccion = IFNULL(?, direccion), email = IFNULL(?, email) contraseña = IFNULL(?, contraseña) id_roles = IFNULL(?, id_roles)   WHERE id_usuario = ?',
          [tipodedocumento, num_documento, nombres, apellidos, direccion, email, contraseña, id_roles, id_usuario]
        );
        
        if (rows.affectedRows === 0) {
            return res.status(404).json({
                message: 'Usuario no encontrado'
            });
        }

        res.json({
            message: 'Usuario actualizado exitosamente',
            usuario_id: id_usuario,
            tipodedocumento, 
            num_documento, 
            nombres, 
            apellidos, 
            direccion, 
            email, 
            contraseña, 
            id_roles
        });
    } catch (error) {
        console.error('Error al actualizar un uruario:', error);
        return res.status(500).json({
            message: 'Algo va mal',
        });
    }
}




export const deleteUsuario = async (req,res) => {
    try {
    const [result] = await pool.query('DELETE FROM usuario WHERE id_usuario = ?', [
        req.params.id_usuario
    ]);
    
    if(result.affectedRows <= 0) 
      return res.status(404).json({
        message: 'usuario no encontrada'
      });

    res.sendStatus(204);
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
}