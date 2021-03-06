/*
 * @Descripttion:
 * @Author: Bugmakerrrr
 * @Date: 2021-09-01 16:14:10
 * @LastEditTime: 2021-09-08 17:59:54
 */
const getSqlContentMap = require('./utils/get-sql-content-map');
const { query } = require('./utils/db');

// 打印脚本执行日志
const eventLog = function (err, sqlFile, index) {
  if (err) {
    console.log(`[ERROR] ${sqlFile}: 第${index + 1}条脚本 执行失败！`);
  } else {
    console.log(`[SUCCESS] ${sqlFile}: 第${index + 1}条脚本 执行成功!`);
  }
};

// 获取所有sql脚本内容
let sqlContentMap = getSqlContentMap();

// 执行建表sql脚本
const createAllTables = async () => {
  for (let key in sqlContentMap) {
    let sqlShell = sqlContentMap[key];
    let sqlShellList = sqlShell.split(';');

    for (let [i, shell] of sqlShellList.entries()) {
      if (shell.trim()) {
        let result = await query(shell);
        if (result.serverStatus * 1 === 2) {
          eventLog(null, key, i);
        } else {
          eventLog(true, key, i);
        }
      }
    }
  }
  console.log('sql脚本执行结束！');
  console.log('请按 ctrl + c 键退出！')
};

createAllTables();
