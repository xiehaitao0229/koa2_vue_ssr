"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dns = require("dns");

/**
 * IndexModel类，生成一段异步的数据
 * @class
 */
let UserService = class UserService {
  /**
   * @constructor
   * @param {string} app koa2的上下文环境
   */
  constructor(app) {}
  /**
   * 获取具体的API接口数据
   * @returns {Promise} 返回的异步处理结果
   * @example
   * return new Promise
   * getData()
   */
  getData(id) {
    return new Promise((resolve, reject) => {
      // setTimeout(()=>{
      //     resolve(`Hello UserAction【${id}】`);
      // },1000);
      resolve([{ title: "koa" }, { title: "webpack" }, { title: "vue" }]);
      //throw new Error("")
      //reject("")
    });
  }
}; /**
    * @fileOverview 实现Index 数据模型
    * @author yuanzhijia@yidengxuetang.com
    */

exports.default = UserService;