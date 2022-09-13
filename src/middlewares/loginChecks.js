/**
 * @description 登录验证的中间件
 * @author 阿白
 */

const { ErrorModel } = require('../model/ResModel')
const { loginCheckFailInfo } = require('../model/Errorinfo')

/**
 * API 登录验证
 * @param {Object} ctx ctx
 * @param {function} next next
 */
async function loginCheck(ctx, next) {
    if (ctx.session && ctx.session.userInfo) {
        // 已登录
        await next()
        return
    }
    // 未登录
    ctx.body = new ErrorModel(loginCheckFailInfo)
}

/**
 * 页面登录验证
 * @param {Object} ctx ctx
 * @param {function} next next
 */
async function loginRedirect(ctx, next) {
    if (ctx.session && ctx.session.userInfo) {
        // 已登录
        await next()
        return
    }
    // 未登录
    const curUrl = ctx.url  // encodeURIComponent 编码
    ctx.redirect('/login?url=' + encodeURIComponent(curUrl))
}

module.exports = {
    loginCheck,
    loginRedirect
}