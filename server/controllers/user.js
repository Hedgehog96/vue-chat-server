/*
 * @Descripttion: 
 * @Author: Lijia Lin
 * @Date: 2021-09-02 16:46:02
 * @LastEditTime: 2021-09-03 15:56:50
 */
const jwt = require('jsonwebtoken')
const config = require('../../config')
const userCodes = require('./../codes/user')
const userModels = require('../models/user')

module.exports = {
  /**
   * 登录
   * @param {object} ctx 上下文对象
   */
  async signIn(ctx) {
    const resp = {
      message: '登录成功',
      data: {},
      code: 2000,
      token: ''
    }
    try {
      const formData = ctx.request.body
      const userResp = await userModels.getUserByUsernameAndPassword({ ...formData })
      if (userResp) {
        if (formData.username === userResp.username) {
          resp.token = jwt.sign(formData, config.secret, { expiresIn: '1h' })
        } else {
          resp.message = userCodes[2002]
          resp.code = 2002
        }
      }
      else {
        resp.message = userCodes[2004]
        resp.code = 2004
      }
    } catch {
      resp.message = userCodes.ERROR_SYS
      resp.code = 'ERROR_SYS'
    }

    return ctx.body = resp
  }
}