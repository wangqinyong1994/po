/**
 * 数据类型判断
 * @param target 待校验变量
 * @param type 数据类型 如(Number, String...)
 * @returns boolean
 */

export const isType = (target, type) =>
  Object.prototype.toString.call(target).slice(8, -1) === type;
