/*
 * @Descripttion: 
 * @Author: Lijia Lin
 * @Date: 2021-09-02 14:00:29
 * @LastEditTime: 2021-09-02 14:20:48
 */
const mysql = require('mysql')
const config = require('../../config')
const databaseConfig = config.database

const pool = mysql.createPool({
  host     : databaseConfig.HOST,
  user     : databaseConfig.USERNAME,
  password : databaseConfig.PASSWORD,
  database : databaseConfig.DATABASE
})

const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((error, connection) => {
      if (error) {
        resolve(error)
      } else {
        connection.query(sql, values, (error, rows) => {
          if (error) {
            reject(error)
          }
          else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}

const select = (table, keys) => {
  const _sql = 'SELECT ? FROM ?'
  return query(_sql, [keys, table])
}

const insert = (table, values) => {
  const _sql = 'INSERT INTO ?? SET ?'
  return query(_sql, [table, values])
}

module.exports = {
  query,
  select,
  insert
}