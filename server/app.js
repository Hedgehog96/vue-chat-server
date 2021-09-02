/*
 * @Description: 
 * @Author: Bugmakerrrr
 * @Date: 2021-09-01 20:40:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-02 17:23:38
 */
const Koa = require('koa')
const app = new Koa()

const config = require('../config')
const routers = require('./routers/apis')

app.use(routers.routes()).use(routers.allowedMethods())

app.listen(config.port, () => {
  console.log('[vue-chat] starting')
})