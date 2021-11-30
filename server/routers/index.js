/*
 * @Descripttion: 
 * @Author: Bugmakerrrr
 * @Date: 2021-09-02 17:19:36
 * @LastEditTime: 2021-11-03 10:35:09
 */
const router = require('koa-router')()
const userController = require('../controllers/user')

const routers = router
  .post('/api/signIn', userController.signIn)
  .post('/api/signUp', userController.signUp)

module.exports = routers