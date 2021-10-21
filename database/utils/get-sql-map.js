/*
 * @Descripttion:
 * @Author: Bugmakerrrr
 * @Date: 2021-09-01 16:33:09
 * @LastEditTime: 2021-09-08 18:00:18
 */
const walkFile = require('./walk-file');

/**
 * 获取sql目录下的文件目录数据
 * @return {object}
 */
function getSqlMap() {
  let basePath = __dirname;
  basePath = basePath.replace(/\\/g, '/');

  let pathArr = basePath.split('/');
  pathArr = pathArr.splice(0, pathArr.length - 1);
  basePath = pathArr.join('/') + '/sql/';

  let fileList = walkFile(basePath, 'sql');
  return fileList;
}

module.exports = getSqlMap;
