/*
 * @Author: ngwang
 * @Date: 2021-02-08 15:08:06
 * @LastEditors: ngwang
 * @LastEditTime: 2021-04-09 15:46:54
 */
const path = require("path");
const { execSync } = require("child_process");
const { exit } = require("yargs");
const fse = require("fs-extra");
const ora = require("ora");
const chalk = require("chalk");
const inquirer = require("inquirer");

module.exports = async ({ dest }) => {
  // 输出文件 工作目录
  const destPos = process.cwd() + "/" + dest;
  // 获取文件 下载源目录
  const source = path.resolve(__dirname, "./create/templates/diy_tpls");
  console.log("destPos: ", destPos);
  try {
    if (!fse.existsSync(destPos)) {
      // 目录不存在报错
      console.log(`${chalk.red("工作目录不存在")} 💥💥💥💥💥💥`);
      exit(1);
    }
    const tpls = await fse.readdirSync(source, {
      encoding: "utf-8",
    });
    if (!tpls.length) {
      console.log(`${chalk.red("当前无自定义模版")}`);
      exit(1);
    } else {
      const { tplName, rename } = await inquirer.prompt([
        {
          name: "tplName",
          type: "rawlist",
          message: `${chalk.yellow("想要获取哪个模板?")}`,
          choices: tpls,
        },
        {
          name: "rename",
          type: "confirm",
          message: `${chalk.yellow("是否需要重命名?")}`,
        },
      ]);

      console.log(47, tplName, rename);
      if (!tplName) {
        console.log(`${chalk.red("未选择无自定义模版")}`);
        exit(1);
      } else {
        if (!rename) {
          const spinner = ora(
            `${chalk.yellow("loading...")} 🚗🚗🚗...`
          ).start();
          const sourceFile = `${source}/${tplName}`;
          execSync(`cp -r ${sourceFile} ${destPos}`);
          spinner.succeed(`${chalk.green("success")} 🎆🎆🎆🎆🎆🎆`);
        } else {
          const { name } = await inquirer.prompt([
            {
              name: "name",
              type: "input",
              message: `${chalk.yellow("重命名名称?")}`,
              validate: (val) => {
                if (!val) {
                  console.log(
                    `${chalk.red("请输入文件或文件夹名称")} 💥💥💥💥💥💥`
                  );
                  return false;
                }
                if (!/^[a-zA-Z]\w{4,15}$/.test(val)) {
                  console.log(
                    `${chalk.red("文件或文件夹名称不合法")} 💥💥💥💥💥💥`
                  );
                  return false;
                }
                return true;
              },
            },
          ]);
          const sourceFile = `${source}/${tplName}`;
          const destFile = `${destPos}/${tplName}`;
          const extname = path.extname(sourceFile);
          execSync(`cp -r ${sourceFile} ${destPos}`);
          fse.renameSync(destFile, `${destPos}/${name}${extname}`);
          console.log(`${chalk.green("success")} 🎆🎆🎆🎆🎆🎆`);
        }
      }
    }
  } catch (error) {
    console.log(`${chalk.red("fail")} 💥💥💥💥💥💥`);
    exit(1);
  }
};
