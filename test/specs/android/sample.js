const wdio = require('webdriverio');
const assert = require('assert');
const { find } = require('appium-flutter-finder');
const LoginScreen = require('../../screenObjects/android/LoginScreen');
const { $ } = require('webdriverio/build/commands/element');


//app-dev-debug.apk (mhe) with uiAutomator2
describe('Sample', () => {
    
  it.only('sample test', async () => {
        // find = new FlutterFinder(driver);
        const viewsFirst = await driver.getContext();
        console.log(viewsFirst, '*****launch*****')
        /* Duplicating selector and selector1 becoz of typing issue */
       // const selector = 'new UiSelector().text("Username").className("android.widget.EditText")'
       
       const input = await $(`android=${LoginScreen.userName}`)
        await input.click();
        await input.setValue('mobile.k12.student');
        await driver.pause(5000);

       // const selector1 = 'new UiSelector().text("Username").className("android.widget.EditText")'
        const input1 = await $(`android=${LoginScreen.userName}`)
        await input1.click();
        await input1.setValue('mobile.k12.student');
        await driver.pause(5000);

        //const selector2 = 'new UiSelector().text("Password").className("android.widget.EditText")'
        const input2 = await $(`android=${LoginScreen.passWord}`)
        await input2.click();
        await input2.setValue('Qa123456');
        await driver.pause(5000);

        const btn = await $('~Sign In')
        await btn.click();
        await driver.pause(20000);


        //Click on K5 course
        await driver.switchContext('NATIVE_APP');
        const selectorrr = 'new UiSelector().descriptionContains("K5 Course")'
        const inputtt = await $(`android=${selectorrr}`)
        await inputtt.click();
        await driver.pause(20000);
        const views = await driver.getContext();
        console.log(views, '*****11111*****')

        //Click on course tab below
        const courseTab='new UiSelector().descriptionContains("Tab 2 of")'
        const courseTab1 = await $(`android=${courseTab}`)
        await courseTab1.click();
        await driver.pause(3000);
        const views1 = await driver.getContext();
        console.log(views1, '*****222222*****')
          //Click on course Menu
          const courseMenu=await $('~Course Menu')
          await courseMenu.click();
          await driver.pause(5000);
          const views3 = await driver.getContext();
          console.log(views3, '*****333333*****')
      
          //Click on chapter
        const chapterClick=await $('~Chapter 1: This is my modified title')
        await chapterClick.click();
        await driver.pause(5000);
        const views4 = await driver.getContext();
        console.log(views4, '*****44444*****')
       
        //Click on lesson
        const lessonClick=await $('~Lesson 1: The First Civilizations')
        await lessonClick.click();
        await driver.pause(3000);
        const views5 = await driver.getContext();
        console.log(views5, '*****5555*****')

        //Close the app
        await driver.closeApp();

    });


})



