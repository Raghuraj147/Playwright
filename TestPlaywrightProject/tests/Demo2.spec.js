const {test, expect} = require('@playwright/test')

test('fisrt Assertion Test', async({page})=>{
    expect(125).toBe(125)
})

test('secound Assertion Test', async({page})=>{
    expect(10.175).toBe(10.879)
})

test.skip('third Assertion Test', async({page})=>{
    expect(250).toBeGreaterThan(150)
})

test('Fourth Assertion Test', async({page})=>{
    expect('s G Software testing').toContain('Software')
})