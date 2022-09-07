/**
 * @description json test
 * @author 阿白
 */

const server = require('./server');

test('json 接口返回数据格式正确', async () => {
    const res = await server.get('/json');
    expect(res.body).toEqual({ // 判断对象 是否相等
        title: 'koa2 json'
    })
    expect(res.body.title).toBe('koa2 json');
})

// test('json 接口返回数据格式正确', async () => {
//     const res = await server.post('/login').send({
//         userName: 'zhangsan',
//         password: '123'
//     });
//     expect(res.body).toEqual({ // 判断对象 是否相等
//         title: 'koa2 json'
//     })
//     expect(res.body.title).toBe('koa2 json');
// })