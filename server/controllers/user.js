/*
 * @Descripttion: 
 * @Author: Lijia Lin
 * @Date: 2021-09-02 16:46:02
 * @LastEditTime: 2021-09-02 17:18:12
 */
const userCodes = require('./../codes/user')
const userModels = require('../models/user')

module.exports = {
  /**
   * 登录
   * @param {object} ctx 上下文对象
   */
  async signIn(ctx) {
    const formData = ctx.request.body
    const resp = {
      success: false,
      message: '',
      data: null,
      code: ''
    }

    // const userResp = await userModels.getUserByUsernameAndPassword({ ...formData })
    // if (userResp) {
    //   resp.success = true
    // }
    // else {
    //   resp.message = userCodes.FAIL_USER_NAME_OR_PASSWORD_ERROR
    //   resp.code = 'FAIL_USER_NAME_OR_PASSWORD_ERROR'
    // }

    return resp
  }
}