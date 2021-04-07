const process = require("process");
const path = require("path");
const fse = require("fs-extra");
const ora = require("ora");
const chalk = require("chalk");

module.exports = async ({ options }) => {
  const spinner = ora("生成模版中...").start();
  const { filename } = options;
  if (!filename) {
    spinner.fail(chalk.red("创建模版失败😈: 请输入filename..."));
    process.exit(1);
  }
  const dirPath = path.resolve(__dirname, `./${filename}`);
  const filePath = path.resolve(__dirname, `./${filename}/index.jsx`);
  const lessPath = path.resolve(__dirname, `./${filename}/index.less`);
  const templatePath_jsx = path.resolve(
    __dirname,
    "./templates/page_jsx/index.jsx"
  );
  const templatePath_less = path.resolve(
    __dirname,
    "./templates/page_jsx/index.less"
  );
  if (fse.existsSync(dirPath) && fse.existsSync(filePath)) {
    spinner.fail(chalk.red("文件已存在"));
    process.exit(1);
  }
  fse.mkdirSync(dirPath);
  const [content_jsx, content_less] = await Promise.all([
    fse.readFileSync(templatePath_jsx, { encoding: "utf-8" }),
    fse.readFileSync(templatePath_less, { encoding: "utf-8" }),
  ]);
  await Promise.all([
    fse.writeFile(filePath, content_jsx, { encoding: "utf-8" }),
    fse.writeFile(lessPath, content_less, { encoding: "utf-8" }),
  ]);
  spinner.succeed(chalk.green("创建成功..."));
};
