import { pool } from '../db.js'

export const getIngresos = async( req, res) =>{
    const [rows] = await pool.query('SELECT * FROM ingresosproveedores')
    res.json(rows)
}




export const getIngreso = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM ingresosproveedores WHERE id_ingresos = ?', [
            req.params.id_ingresos
        ]);

        if(rows.length <= 0)
         return res.status(404).json({
            message: 'Ingreso no encontrado',
          });
        res.json(rows[0]);
      } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
      }
 };




export const createIngresos = async (req,res) => {
    try {
        const {id_productos, cantidad} = req.body
        const [rows] = await pool.query(
          'INSERT INTO ingresosproveedores (id_productos, cantidad, fecha_ingreso) VALUES(?, ?, ?)', 
          [id_productos, cantidad, fecha_ingreso]
        );
        res.send({
            id_ingresos: rows.insertId,
            id_productos, 
            cantidad,
            fecha_ingreso
        });
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
};




export const updateIngreso = async (req,res) => {
    try {
        const {id_ingresos} = req.params
        const {id_productos, cantidad, fecha_ingreso} = req.body

        const [rows] = await pool.query(
          'UPDATE ingresosproveedores SET id_productos = IFNULL(?, id_productos), cantidad = IFNULL(?, cantidad), fecha_ingreso = IFNULL(?, fecha_ingreso) WHERE id_ingresos = ?',
          [id_productos, cantidad, fecha_ingreso, id_ingresos]
          
        );
        
        if (rows.affectedRows === 0) {
            return res.status(404).json({
                message: 'Ingreso no encontrado'
            });
        }

        res.json({
            message: 'Ingreso actualizado exitosamente',
            ingresos_id: id_ingresos,
            id_productos, 
            cantidad,
            fecha_ingreso
        });
    } catch (error) {
        console.error('Error al actualizar un Ingreso:', error);
        return res.status(500).json({
            message: 'Algo va mal',
        });
    }
}





export const deleteIngreso = async (req,res) => {
    try {
    const [result] = await pool.query('DELETE FROM ingresosproveedores WHERE id_ingresos = ?', [
        req.params.id_ingresos
    ]);
    
    if(result.affectedRows <= 0) 
      return res.status(404).json({
        message: 'Ingreso no encontrado'
      });

    res.sendStatus(204);
    } catch(error) {
        return res.status(500).json({
            message: 'Algo va mal'
        });
    }
}