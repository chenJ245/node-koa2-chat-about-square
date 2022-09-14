/**
 * @description jest server
 * @author 阿白
 */

const request = require('supertest')
const server = require('../src/app').callback()

module.exports = request(server)