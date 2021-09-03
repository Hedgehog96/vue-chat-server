/*
 * @Descripttion: 
 * @Author: Lijia Lin
 * @Date: 2021-09-02 14:12:00
 * @LastEditTime: 2021-09-03 13:48:37
 */
const dbUtils = require('../utils/db')

const user = {
  /**
   * 创建用户
   * @param {object} model 用户数据模型
   * @returns 
   */
  async create(model) {
    const result = await dbUtils.insert('users', model)
    return result
  },

  /**
   * 根据用户名查找用户
   * @param {string} username 用户名
   * @returns 
   */
  async getUserByUsername(username) {
    const _sql = `
    SELECT * FROM users WHERE username='${username}'
    `
    let result = await dbUtils.query(_sql)
    if (Array.isArray(result) && result.length > 0) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },

  /**
   * 根据用户名、密码查找用户
   * @param {object} options 用户名密码对象
   * @returns 
   */
   async getUserByUsernameAndPassword(options) {
    const _sql = `
    SELECT * FROM users where password='${options.password}' and username='${options.username}'
    `
    let result = await dbUtils.query(_sql)
    if (Array.isArray(result) && result.length > 0) {
      result = result[0]
    } else {
      result = null
    }
    return result
  }
}

module.exports = user