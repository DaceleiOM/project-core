const jwt = require('jwt-simple');
const dayjs = require('dayjs');

module.exports = {
  create: (userId, roles = []) => {
    const payload = {
      sub: {
        user_id: userId,
        rol: roles.map(role => role.toUpperCase()),
        pusher_channel: roles.map(role => role.toUpperCase()).join('_') + `_${userId}`
      },
      iat: dayjs().unix(),
      exp: dayjs().add(3, 'month').endOf('month').unix()
    };
    return jwt.encode(payload, process.env.TOKEN_SECRET_KEY);
  }
};
