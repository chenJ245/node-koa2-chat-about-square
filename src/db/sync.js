/**
 * @description sequelize 同步数据库
 * @author 阿白
 */
const seq = require('./seq')

require('./model/index')

// 测试连接 适合开发环境
seq.authenticate().then(() => {
    console.log('auth ok')
}).catch(() => {
    console.log('auth err')
})

// 执行同步
seq.sync({ force:true }).then(() => {
    console.log('sync ok')
    process.exit()
})