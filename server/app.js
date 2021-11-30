/*
 * @Description: 
 * @Author: Bugmakerrrr
 * @Date: 2021-09-01 20:40:54
 * @LastEditors: Bugmakerrrr
 * @LastEditTime: 2021-11-03 10:18:05
 */
const path = require('path')

const Koa = require('koa')
const static = require('koa-static')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const jwt = require('koa-jwt')

const config = require('../config')
const routers = require('./routers/index')

const app = new Koa()

// 静态文件路径
app.use(static(path.join(__dirname, 'public')))

app.use(cors())

// 配置ctx.body解析中间件
app.use(bodyParser())

// 验证token
app.use(jwt({ secret: config.secret, passthrough: true }).unless({ path: [/^\/api\/signUp/, /^\/api\/signIn/] }))

app.use(routers.routes()).use(routers.allowedMethods())

app.listen(config.port, () => {
  console.log('[vue-chat-server] starting')
})