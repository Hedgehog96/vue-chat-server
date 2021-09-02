/*
 * @Description: 
 * @Author: Bugmakerrrr
 * @Date: 2021-09-01 20:40:54
 * @LastEditors: Bugmakerrrr
 * @LastEditTime: 2021-09-01 23:06:37
 */
const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  ctx.body = 'Hello vue-chat'
})

app.listen(3001, () => {
  console.log('[vue-chat] starting')
})