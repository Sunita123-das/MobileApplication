
//app-debug.apk (fashion)
//const { find } = require('appium-flutter-finder');
const { byValueKey } = require('appium-flutter-finder');
const wdio = require('webdriverio');
const assert = require('assert');
const find= require('appium-flutter-finder');
const { byText } = require('appium-flutter-finder');
//import * as find from 'appium-flutter-finder';

describe('Sample', () => {
   it.only('sample test', async () => {
     
        const views = await driver.getContext();
        console.log(views, '*****11111*****')
        await driver.switchContext('FLUTTER');
        //const apptext=await find.byText('LAUNCH FLUTTER ACTIVITY');
        console.log('++++++before+++++++');
      //   const button=find.byText('LAUNCH FLUTTER ACTIVITY');
      //   assert.strictEqual(await driver.getElementText(find.byText('LAUNCH FLUTTER ACTIVITY')),'LAUNCH FLUTTER ACTIVITY')
      //   await driver.elementClick(button);
      const button = find.byText('Get Started')
        assert.strictEqual(await driver.getElementText(find.byText('Get Started')), 'Get Started')
        await driver.elementClick(button)
        console.log('+++++++after++++++');
         await driver.pause(5000);
         const views1 = await driver.getContext();
        console.log(views1, '*****22222*****')
        const button1 = find.byText('Dress')
        assert.strictEqual(await driver.getElementText(find.byText('Dress')), 'Dress')
        await driver.elementClick(button1)
        await driver.pause(5000);
        const button2 = find.byValueKey('00000000-0000-003c-0000-000e00000003')
        //assert.strictEqual(await driver.getElementText(find.byText('Second shirt $35')), 'Second shirt $35')
        await driver.elementClick(button2);
        await driver.pause(5000);
        const views2 = await driver.getContext();
        console.log(views2, '*****33333*****')
   });

})



