//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import server from './src/server'
import { transporter } from './src/config/mail'
import 'dotenv/config'
const { API_PORT } = process.env
import { sequelize } from './src/database/models'
// const PORT = process.env.PORT
server.listen(API_PORT, async () => {
  await sequelize.authenticate({ force: false }).then(() => {console.log(`DB connected`)})
  await transporter.verify().then(() => {console.log('Ready to send emails');})
  await console.log(`API is in port ${API_PORT}`)
})