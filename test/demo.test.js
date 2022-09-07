/**
 * @description test demo
 * @author 阿白
 */

function sum(a, b) {
    return a + b;
}

test('10 + 20 应该等于 30', () => {
    const res = sum(10, 20)
    expect(res).toBe(30) // 期望这个结果是30
})

test('10 + 20 应该不等于 40', () => {
    const res = sum(10, 20)
    expect(res).not.toBe(40)
})