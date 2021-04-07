/*
 * @Author: ngwang
 * @Date: 2021-02-07 09:33:31
 * @LastEditors: ngwang
 * @LastEditTime: 2021-04-07 15:48:51
 */
export default {
  target: "node",
  cjs: { type: "babel", lazy: true },
  disableTypeCheck: true,
  pkgs: ["po-utils", "po-config", "eslint-config-po", "po-cli"],
};
