/**
 * @description 用户单元测试的用户信息
 * @author 阿白
 */

/**
 * cookie 是 用户的敏感信息，此处只能是测试用户的  cookie
 * 每次测试用户重新登录， 都需要更新这里的 cookie
 */
module.exports = {
    Z_ID: 1,
    Z_USER_NAME: 'zhangsan',
    Z_COOKIE: 'weibo.sid=_El7lTTbNmp0zuV3bIwmnOVXSug60zTQ; weibo.sid.sig=ZgGJQKYXJyCWJuxYKvKaT7bs5p4',

    L_ID: 2,
    L_USER_NAME: 'lisi',
    L_COOKIE: 'weibo.sid=0MKgAcsAmKwDMSGl_pUdV3daCTMuIfMH; weibo.sid.sig=JMS74PuFHzeVLRwCmzhsn4-z3xo'
}