/*
 * @Descripttion:
 * @Author: Bugmakerrrr
 * @Date: 2021-09-01 16:33:29
 * @LastEditTime: 2021-09-08 18:00:15
 */
const fs = require('fs');
const getSqlMap = require('./get-sql-map');

let sqlContentMap = {};

/**
 * 读取sql文件内容
 * @param  {string} fileName 文件名称
 * @param  {string} path     文件所在的路径
 * @return {string}          脚本文件内容
 */
function getSqlContent(fileName, path) {
  let content = fs.readFileSync(path, 'binary');
  sqlContentMap[fileName] = content;
}

/**
 * 封装所有sql文件脚本内容
 * @return {object}
 */
function getSqlContentMap() {
  let sqlMap = getSqlMap();
  for (let key in sqlMap) {
    getSqlContent(key, sqlMap[key]);
  }

  return sqlContentMap;
}

module.exports = getSqlContentMap;
