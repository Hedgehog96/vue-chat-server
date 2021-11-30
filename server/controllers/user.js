/*
 * @Descripttion: 
 * @Author: Bugmakerrrr
 * @Date: 2021-09-02 16:46:02
 * @LastEditTime: 2021-11-08 23:28:09
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
      code: 2000,
      token: ''
    }

    try {
      const formData = ctx.request.body
      if (formData && formData.username) {
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
      } else {
        resp.message = userCodes[1001]
        resp.code = 1001
      }
    } catch {
      resp.message = userCodes.ERROR_SYS
      resp.code = 'ERROR_SYS'
    }

    return ctx.body = resp
  },

  /**
   * 注册
   */
   async signUp(ctx) {
    const resp = {
      message: '注册成功',
      code: 2001,
    }

    try {
      console.log(ctx.request.body)
    }
    catch {}
    return ctx.body = {}
  }
}