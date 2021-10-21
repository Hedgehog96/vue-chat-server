/*
 * @Descripttion:
 * @Author: Bugmakerrrr
 * @Date: 2021-09-01 16:21:20
 * @LastEditTime: 2021-09-08 17:59:24
 */
const mysql = require('mysql');
const config = require('../../config');

const dbConfig = config.database;
const pool = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USERNAME,
  password: dbConfig.PASSWORD,
  database: dbConfig.DATABASE,
});

const query = function (sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (error, connection) {
      if (error) {
        resolve(error);
      } else {
        connection.query(sql, values, (error, rows) => {
          if (error) {
            reject(error);
          } else {
            resolve(rows);
          }
          connection.release();
        });
      }
    });
  });
};

module.exports = {
  query,
};
