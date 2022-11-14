const mysqlConnection = require('../config/mysql.js');

const getUsers = (req, res) => {
    mysqlConnection.query('SELECT * FROM users', (err, rows, fields) => {
      if (err) {
        const {sqlMessage, code, errno} = err;
        console.log(sqlMessage, code, errno);
        // console.log(err);
        return res.send('Error al buscar la información de consulta');
      }
      res.json(rows);
    });
}

const getUser = (req, res) => {
    const {id} = req. params;
    mysqlConnection.query('SELECT * FROM users WHERE id=?', [id], (err, rows, fields) => {
      if (rows.length == 0) {
        return res.status(404).send('No se ha encontrado ningún usuario con el id solicitado.')
      }
      if (err) {
        console.log(err);
        return res.send('Error al buscar la información de consulta.');
      }
      res.status(200).json(rows[0]);
    }); 
}

const createUser = (req, res) => {
    const {name, mail, city} = req.body;
    // validación de los valores recibidos
    if(!(name && mail && city)) {
      return res.send('No se han ingresado los parámetros correctamente.')
    }
    mysqlConnection.query('INSERT INTO users (name, mail, city) VALUES (?,?,?)', [name, mail, city], (err, rows, fields) => {
      if (err) {
        console.log(err);
        return res.send('No se pudo insertar la información');
      }
      res.send('Se ha creado el usuario correctamente');
    });
}

const editUser = (req, res) => {
    const {id} = req.params;
    const {name, mail, city} = req.body;
    if(!(name && mail && city)) {
      return res.send('No se han ingresado los parámetros correctamente.')
    }
    mysqlConnection.query('UPDATE users SET name=?, mail=?, city=? WHERE id=?', [name, mail, city, id], (err, results, fields) => {
      if (err) {
        console.error(err);
        return res.send('no se pudo actualizar la información correctamente');
      }
      res.send('usuario actualizado correctamente');
    })
}

const deleteUser = (req, res) => {
    const {id} = req.params;
    console.log(id);
    mysqlConnection.query('DELETE FROM users WHERE id=?', [id], (err, rows, fields) => {
      if(err){
        console.log(err);
        return res.send('No se ha podido eliminar al usuario.');
      }
      res.send('Usuario eliminado correctamente');
    });
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    editUser,
    deleteUser
}