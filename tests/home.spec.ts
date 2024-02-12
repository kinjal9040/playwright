import { test, expect } from '@playwright/test';
import { exitCode } from 'process';
const path=require("path");

test.describe('', () => {
    

    test('Open homepage and verify title', async({page})=>{
        //open url
        await page.goto('https://parabank.parasoft.com/parabank/index.htm');

        //verify title
        await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking');

        //Navigate to About Us
        await page.click("//a[normalize-space()='Register']");

        //verify title
        await expect(page).toHaveTitle('ParaBank | Register for Free Online Account Access')

        //verify URL through regex (url should consist "register")
        await expect(page).toHaveURL(/.*register/);

        //verify that text is display on page by using text in locator
        const tex=page.locator('text=Signing up is easy!');
        await expect(tex).toBeVisible();
        

        //verify that menu are present on page (multiple elements)
        const list1=["About Us","Services","Products","Locations","Admin Page"];
        const total1=page.locator(".leftmenu li a").allInnerTexts();
        expect(await total1).toEqual(list1);
       
        //verify that 3rd num of element in a list is present on the page or not 
         const list=["About Us","Services","Products","Locations","Admin Page"];
         const total=page.locator(".leftmenu li a").nth(3).innerText();
         expect(await total).toEqual(list[3]);
       
         //print each text present inside list
         const total2=page.locator(".leftmenu li a")
         for (const el of await total2.elementHandles()){
            console.log(await el.textContent())
         }

        //do registration
        // await page.locator("//input[@id='customer.firstName']").fill("neha")
        // await page.locator("//input[@id='customer.lastName']").fill("sharma")
        // await page.locator("//input[@id='customer.address.street']").fill("399 markham rd")
        // await page.locator("//input[@id='customer.address.city']").fill("scarborough")
        // await page.locator("//input[@id='customer.address.state']").fill("ontario")
        // await page.locator("//input[@id='customer.address.zipCode']").fill("m1j3c9")
        // await page.locator("//input[@id='customer.phoneNumber']").fill("4387255985")
        // await page.locator("//input[@id='customer.ssn']").fill("459785")
        // await page.locator("//input[@id='customer.username']").fill("neha")
        // await page.locator("//input[@id='customer.password']").fill("neha1998")
        // await page.locator("//input[@id='repeatedPassword']").fill("neha1998")
        // await page.click("//input[@value='Register']")

        //do login
        await page.locator("//input[@name='username']").fill("neha")
        await page.locator("//input[@name='password']").fill("neha1998")
        await page.click("//input[@value='Log In']");
        // await page.waitForSelector("text=*Balance includes deposits that may be subject to holds")
        // const tx= page.locator("text=*Balance includes deposits that may be subject to holds")
        // expect(tx).toBeVisible();
       
        // //soft assertions
        // const t=page.locator("text=Accounts Overview")
        // expect.soft(t).toBeVisible();

        // //verify total number of elements present in list
        // const all=page.locator("#leftPanel ul li a").allInnerTexts();
        // expect((await all).length).toEqual(8);





       
        
        
       




        




    })

    
})

