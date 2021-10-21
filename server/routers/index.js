/*
 * @Descripttion: 
 * @Author: Bugmakerrrr
 * @Date: 2021-09-02 17:19:36
 * @LastEditTime: 2021-09-08 18:00:42
 */
const router = require('koa-router')()
const userController = require('../controllers/user')

const routers = router
  .post('/api/signIn', userController.signIn)

module.exports = routers