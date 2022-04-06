const bcrypt = require('bcrypt');
// const authConfig = require('../../config/auth')
const authConfig = require('../config/auth')
// async function hashPass(str) {
//   const password1 = await bcrypt.hashSync(str, Number.parseInt(authConfig.rounds))
//   return password1
// }
module.exports = {
  async hashPass(str) {
    const password1 = await bcrypt.hashSync(str, Number.parseInt(authConfig.rounds))
    return password1
  }
}