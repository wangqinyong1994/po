/*
 * @Author: ngwang
 * @Date: 2021-02-08 15:07:39
 * @LastEditors: ngwang
 * @LastEditTime: 2021-04-08 18:56:15
 */
const process = require("process");
const fse = require("fs-extra");
const path = require("path");
const chalk = require("chalk");
const inquirer = require("inquirer");
const { exit } = require("yargs");
const ora = require("ora");

// 从项目里复制到模板中

// 单个文件夹加其他文件报错
// 只有单个文件夹执行
module.exports = ({ src }) => {
  const source = process.cwd() + "/" + src;
  const dest = path.resolve(__dirname, "./create/templates/diy_tpls");
  if (!fse.existsSync(source)) {
    // 目录不存在报错报错
  } else {
    const sourceFiles = fse.readdirSync(source, {
      encoding: "utf-8",
    });

    const spinner = ora(`${chalk.yellow("正在生成")} 🚗🚗🚗...`).start();

    if (sourceFiles.length) {
      // 有文件夹并且是单个文件夹
      if (sourceFiles.length === 1) {
        // 有文件夹并且是单个文件夹
        const sourcePath = source + "/" + sourceFiles[0];
        if (fse.isDirectory(sourcePath)) {
          // 复制文件夹
          spinner.succeed(`${chalk.green("复制文件夹success")} 🎆🎆🎆🎆🎆🎆`);
        } else if (fse.isFile(sourcePath)) {
          // 复制文件
          spinner.succeed(`${chalk.green("复制文件success")} 🎆🎆🎆🎆🎆🎆`);
        } else {
          spinner.fail(`${chalk.red("未知错误 fail")} 💥💥💥💥💥💥`);
          exit(1);
        }
      } else {
        // 多个文件夹报错
        spinner.fail(`${chalk.red("存在多个文件夹报错 fail")} 💥💥💥💥💥💥`);
        exit(1);
      }
    } else {
      // 空报错
      spinner.fail(`${chalk.red("空文件或空文件夹报错 fail")} 💥💥💥💥💥💥`);
    }
  }
  // console.log(23, fse.existsSync(source));
  // console.log("source: ", source);
  // console.log("dest: ", dest);
};
