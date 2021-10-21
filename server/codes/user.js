/*
 * @Descripttion: 
 * @Author: Bugmakerrrr
 * @Date: 2021-09-02 16:56:27
 * @LastEditTime: 2021-09-08 18:27:03
 */
// 1001～1999 区间表示参数错误
// 2001～2999 区间表示用户错误
// 3001～3999 区间表示接口异常

const codes = {
  1: '操作成功',

  1001: '参数错误',

  1003: '用户名格式为6-16位的小写字母，包括-、_',

  1004: '密码长度应该为6-16',

  1005: '两次密码不一致',

  2000: '登录成功',

  2001: '用户名已被注册',

  2002: '用户名或登录密码错误',

  2003: '用户未登录',

  2004: '用户不存在',

  3001: '系统错误',

}

module.exports = codes