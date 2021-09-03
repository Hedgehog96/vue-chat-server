/*
 * @Description: 
 * @Author: Bugmakerrrr
 * @Date: 2021-09-01 20:40:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-03 15:34:15
 */
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const kowJwt = require('koa-jwt')
const app = new Koa()

const config = require('../config')
const routers = require('./routers/index')

// 配置ctx.body解析中间件
app.use(bodyParser())

// 验证token
app.use(kowJwt({ secret: config.secret }).unless({ path: [/^\/api\/signUp/, /^\/api\/signIn/] }))

app.use(routers.routes()).use(routers.allowedMethods())

app.listen(config.port, () => {
  console.log('[vue-chat] starting')
})