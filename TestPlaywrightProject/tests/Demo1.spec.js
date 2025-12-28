const {test, expect} = require('@playwright/test')

test ('First playwright Test', async function display ({page}){
    console.log("Running First Playwright Test using Traditional Function");
}
)

test('secound playwright test', async function({page}){
    console.log("running second Playwright Test using anonymous Function")
})

test('Third Playwright Test', async ({page})=>{
    console.log("running Third Playwright Test using Arrow Function");
})