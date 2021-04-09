/*
 * @Author: ngwang
 * @Date: 2021-02-08 15:07:49
 * @LastEditors: ngwang
 * @LastEditTime: 2021-04-08 15:13:04
 */
const fse = require("fs-extra");
const path = require("path");
const chalk = require("chalk");

module.exports = async () => {
  const source = path.resolve(__dirname, "./create/templates/diy_tpls");
  try {
    const tpls = await fse.readdirSync(source, {
      encoding: "utf-8",
    });
    if (tpls.length) {
      console.log(`${chalk.green("已添加的自定义模版")}: \n${tpls.join("\n")}`);
    } else {
      console.log(`${chalk.red("当前无自定义模版")}`);
    }
  } catch (error) {}
};
