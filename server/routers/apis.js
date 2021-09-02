/*
 * @Descripttion: 
 * @Author: Lijia Lin
 * @Date: 2021-09-02 17:19:36
 * @LastEditTime: 2021-09-02 17:27:19
 */
const router = require('koa-router')()
const userController = require('../controllers/user')

const routers = router
  .get('/signIn', userController.signIn)

module.exports = routers