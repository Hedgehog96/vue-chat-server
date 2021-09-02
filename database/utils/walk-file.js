/*
 * @Descripttion:
 * @Author: Lijia Lin
 * @Date: 2021-09-01 16:29:40
 * @LastEditTime: 2021-09-01 16:33:48
 */
const fs = require('fs');

/**
 * 遍历目录下的文件目录
 * @param  {string} path 需进行遍历的目录路径
 * @param  {string} mime 遍历文件的后缀名
 * @return {object}      返回遍历后的目录结果
 */
const walkFile = function (path, mime) {
  const files = fs.readdirSync(path);
  let fileList = {};

  for (let [i, item] of files.entries()) {
    let itemArr = item.split('.');

    let itemMime = itemArr.length > 1 ? itemArr[itemArr.length - 1] : 'undefined';
    let keyName = item + '';
    if (mime === itemMime) {
      fileList[item] = pathResolve + item;
    }
  }

  return fileList;
};

module.exports = walkFile;
