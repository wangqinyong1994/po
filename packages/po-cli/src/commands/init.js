const process = require("process");
const { exit } = require("yargs");
const ora = require("ora");
const chalk = require("chalk");
const download = require("download-git-repo");
const inquirer = require("inquirer");

module.exports = async (options) => {
  const destPath = process.cwd();
  // TODO: 选择不同模板
  // download("github:wangqinyong1994/taro3-templates", destPath, (err) => {
  //   if (err) {
  //     return spinner.fail(chalk.red("下载模版失败😈"));
  //   }
  //   spinner.succeed(chalk.green("下载模版成功🎆"));
  // });

  try {
    const { tplName } = await inquirer.prompt([
      {
        name: "tplName",
        type: "list",
        message: `${chalk.yellow("想要获取哪个模板?")}`,
        choices: ["honeycomb template"],
      },
    ]);
    if (!tplName) {
      console.log(`${chalk.red("未选择模版")}`);
      exit(1);
    } else {
      if (tplName === "honeycomb template") {
        const spinner = ora("下载模版中...").start();
        download(
          "direct:http://gitlab.iwhalecloud.com/pillar/whale-honeycomb.git#dev-template",
          destPath,
          { clone: true },
          (err) => {
            if (err) {
              console.log(err);
              return spinner.fail(chalk.red("下载模版失败😈"));
            }
            spinner.succeed(chalk.green("下载模版成功🎆"));
          }
        );
      }
    }
  } catch (error) {
    console.log("error: ", error);
  }
};
