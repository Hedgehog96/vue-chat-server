/*
 * @Descripttion: 
 * @Author: Lijia Lin
 * @Date: 2021-09-02 17:26:17
 * @LastEditTime: 2021-09-02 17:26:18
 */
const router = require('koa-router')()

const api = require('./api')

router.use('/api', api.routes(), api.allowedMethods())

module.exports = router