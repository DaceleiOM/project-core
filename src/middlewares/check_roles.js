// Helpers
const { responseCode, http } = require('../helpers/request');

function checkRoles(roles) {
  return (req, res, next) => {
    console.log(req.roles);
    try {
      // Verificar si al menos uno de los roles permitidos está presente en req.roles
      const hasPermission = roles.some(role => req.roles.includes(role));

      if (hasPermission) {
        // El usuario tiene permiso, pasa al siguiente middleware
        next();
      } else {
        // El usuario no tiene permiso, devuelve una respuesta de error
        return res
          .status(responseCode.NOT_AUTHORIZED)
          .json(http.error(null, responseCode.NOT_AUTHORIZED, ['No autorizado. El usuario no tiene permisos para esta acción']));
      }
    } catch (error) {
      // Manejar errores
      return res
        .status(responseCode.BAD_REQUEST)
        .json(http.error(null, responseCode.BAD_REQUEST, [error.message]));
    }
  };
}

module.exports = checkRoles;
