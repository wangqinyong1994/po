/**
 * 数据类型判断
 * @param target 待校验变量
 * @param type 数据类型 如(Number, String...)
 */
export const isType = (target: any, type: any): boolean =>
  Object.prototype.toString.call(target).slice(8, -1) === type;

/**
 * 获取url传参
 * @param key 目标键名
 * @param type location模式，默认hash
 */
export function getUrlParam(key: string, type = "hash"): string | null {
  // eslint-disable-next-line prefer-template
  const reg = new RegExp("[?|&]" + key + "=([^&]+)");
  const match = window.location[type].replace(/\//, "").match(reg);
  return match && match[1];
}
