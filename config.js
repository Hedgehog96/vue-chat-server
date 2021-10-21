/*
 * @Descripttion:
 * @Author: Bugmakerrrr
 * @Date: 2021-09-01 16:09:47
 * @LastEditTime: 2021-10-07 15:47:32
 */
const config = {
  port: 3001,

  secret: 'vue-chat',

  tokenExpiresTime: 604800000,

  database: {
    DATABASE: 'vue-chat',
    USERNAME: 'root',
    PASSWORD: 'l1198659788', // casia
    PORT: '3306',
    HOST: 'localhost',
  },
};

module.exports = config;
