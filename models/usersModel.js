
module.exports = {
    obtener: function (conexion, funcion) {
        conexion.query('SELECT * FROM users', funcion)
    },
    guardar: function (conexion, datos, funcion) {
        conexion.query('INSERT INTO users SET ?', { user: datos.user, rol: datos.rol }, funcion)
    },
    actualizar: function (conexion, datos, funcion) {
        conexion.query('UPDATE users SET ? WHERE id = ?', datos, funcion)
    },
    eliminar: function (conexion, datos, funcion) {
        conexion.query('DELETE FROM users WHERE id = ?', datos, funcion)
    },
    editar: function (conexion, datos, funcion) {
        conexion.query('SELECT * FROM users WHERE id = ?', datos, funcion)
    }
}