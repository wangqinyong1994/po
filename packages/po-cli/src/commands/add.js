/*
 * @Author: ngwang
 * @Date: 2021-02-08 15:07:39
 * @LastEditors: ngwang
 * @LastEditTime: 2021-04-09 15:14:48
 */
const process = require("process");
const fse = require("fs-extra");
const path = require("path");
const chalk = require("chalk");
const { execSync } = require("child_process");

// 从项目里复制到模板中

// 单个文件夹加其他文件报错
// 只有单个文件夹执行
module.exports = async ({ src }) => {
  const source = process.cwd() + "/" + src;
  const dest = path.resolve(__dirname, "./create/templates/diy_tpls");
  if (!fse.existsSync(source)) {
    // 目录不存在报错报错
    console.log(`${chalk.red("当前路径不存在")} 💥💥💥💥💥💥`);
  } else {
    const stat = await fse.stat(source);
    if (stat.isFile()) {
      execSync(`cp ${source} ${dest}`);
      console.log(`${chalk.green("添加模版成功")} 🎆🎆🎆🎆🎆🎆`);
    } else if (stat.isDirectory()) {
      execSync(`cp -r ${source} ${dest}`);
      console.log(`${chalk.green("添加模版成功")} 🎆🎆🎆🎆🎆🎆`);
    } else {
      console.log(`${chalk.red("未知错误")} 💥💥💥💥💥💥`);
    }
  }
};
