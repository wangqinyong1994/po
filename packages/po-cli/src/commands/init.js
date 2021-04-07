/*
 * @Author: ngwang
 * @Date: 2021-02-08 15:07:59
 * @LastEditors: ngwang
 * @LastEditTime: 2021-04-07 15:54:43
 */
const process = require("process");
const path = require("path");
const fse = require("fs-extra");
const ora = require("ora");
const chalk = require("chalk");
const download = require("download-git-repo");
const inquirer = require("inquirer");

module.exports = (options) => {
  inquirer.prompt([]);
  const destPath = path.resolve(__dirname, "../../temp");
  const spinner = ora("下载模版中...").start();
  console.log("options:", options);
  // TODO: 选择不同模板
  download("github:wangqinyong1994/taro3-templates", destPath, (err) => {
    if (err) {
      return spinner.fail(chalk.red("下载模版失败😈"));
    }
    spinner.succeed(chalk.green("下载模版成功🎆"));
  });
};
