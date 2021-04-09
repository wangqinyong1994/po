/*
 * @Author: ngwang
 * @Date: 2021-04-08 11:23:10
 * @LastEditors: ngwang
 * @LastEditTime: 2021-04-08 14:51:56
 */
const process = require("process");
const { execSync } = require("child_process");
const path = require("path");
const ora = require("ora");
const chalk = require("chalk");

module.exports = async (options) => {
  const source = path.resolve(__dirname, `./create/templates/standard`);
  const dest = process.cwd();
  const spinner = ora(`${chalk.yellow("开始下载")} 🚗🚗🚗...`).start();
  try {
    execSync(`cp -r ${source}/. ${dest}`);
    execSync("npm i eslint-config-po -D", {
      cwd: dest,
    });
    spinner.succeed(`${chalk.green("success")} 🎆🎆🎆🎆🎆🎆`);
  } catch (error) {
    spinner.fail(`${chalk.red("fail")} 💥💥💥💥💥💥`);
  }
};
