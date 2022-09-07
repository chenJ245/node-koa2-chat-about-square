/**
 * @description sequelize 实例
 * @authoe 双越老师
 */
const Sequelize = require('sequelize');

const conf = {
    host: 'localhost',
    dialect: 'mysql',
}

// conf.poll = {
//     max: 5, // 连接池中最大的连接数量
//     min: 0, // 最小
//     idle: 10000 // 如果一个连接池 10s 之内没有被使用，则释放
// }

const seq = new Sequelize('koa2_weibo_db', 'root', '123456', conf)  

module.exports = seq;