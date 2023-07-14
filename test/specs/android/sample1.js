const wdio = require('webdriverio');
const assert = require('assert');
const find= require('appium-flutter-finder');
const {byValueKey}= require('appium-flutter-finder');

//app-dev-debug.apk (mhe) with flutter driver
describe('Sample', () => {
    it.only('sample test', async () => {
      const viewsFirst = await driver.getContext();
      console.log(viewsFirst, '*****launch*****');
      console.log('++++++before+++++++');
      await driver.switchContext('FLUTTER');
    console.log('--------------');
    const valueKey = byValueKey('Password');
    console.log('------PWD--------');
   // await driver.elementSendKeys(byValueKey('Password'), 'Jeans')
   // const textk12 = find.byText('K-12 Portal')
     //   assert.strictEqual(await driver.getElementText(find.byText('K-12 Portal')), 'K-12 Portal')
        await driver.elementClick(valueKey)
    //await driver.elementSendKeys(find.byText('Username'), 'Jeans')
        await driver.pause(5000);
        console.log('+++++++after++++++');
    });

})



