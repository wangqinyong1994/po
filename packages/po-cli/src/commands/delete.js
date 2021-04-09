/*
 * @Author: ngwang
 * @Date: 2021-02-08 15:08:06
 * @LastEditors: ngwang
 * @LastEditTime: 2021-04-09 11:10:31
 */
const path = require("path");
const { execSync } = require("child_process");
const { exit } = require("yargs");
const fse = require("fs-extra");
const ora = require("ora");
const chalk = require("chalk");
const inquirer = require("inquirer");

module.exports = async () => {
  const source = path.resolve(__dirname, "./create/templates/diy_tpls");
  try {
    const tpls = await fse.readdirSync(source, {
      encoding: "utf-8",
    });
    if (!tpls.length) {
      console.log(`${chalk.red("当前无自定义模版")}`);
      exit(1);
    } else {
      const { tplName } = await inquirer.prompt([
        {
          name: "tplName",
          type: "checkbox",
          message: `${chalk.yellow("想要删除哪个模板?")}`,
          choices: tpls,
        },
      ]);
      if (!tplName.length) {
        console.log(`${chalk.red("未选择无自定义模版")}`);
        exit(1);
      } else {
        const spinner = ora(`${chalk.yellow("正在删除")} 🚗🚗🚗...`).start();
        tplName.forEach((name) => {
          const tplPath = `${source}/${name}`;
          execSync(`rm -rf ${tplPath}`, {
            cwd: source,
          });
        });
        spinner.succeed(`${chalk.green("success")} 🎆🎆🎆🎆🎆🎆`);
      }
    }
  } catch (error) {
    console.log(`${chalk.red("fail")} 💥💥💥💥💥💥`);
    exit(1);
  }
};
