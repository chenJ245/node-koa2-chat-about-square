/**
 * @description 用户关注关系
 * @author 阿白
 */


const seq = require('../seq')
const { INTEGER } = require('../types')

const UserRelation = seq.define('UserRelation', {
    userId: {
        type: INTEGER,
        allowNull: false,
        comment: '用户 id'
    },
    followerId: {
        type: INTEGER,
        allowNull: false,
        comment: '被关注用户的 id'
    }
})

module.exports = UserRelation