var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var assert = require('assert');
var server = require('./app');

//var driver;
var By = webdriver.By,
until = webdriver.until;

//function startWebsite() {
  global.driver = new webdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions(new chrome.Options().addArguments("start-maximized"))
  //  .add_experimental_option('excludeSwitches', ['enable-logging'])
  .build();
  driver.get('http://localhost:3000');

  //textBefore = testing(driver);
  
//};

//execute testing actions
// function testing(driver) {
//   var textBefore = driver.findElement(By.id('text1')).getText().then(function(el){
//     console.log("[Before] text1: " + el);
//   });
//   // driver.wait(until.elementLocated(By.id('text1')));
//   driver.findElement(By.id('Button1')).click();
//   var textAfter = driver.findElement(By.id('text1')).getText().then(function(el){
//     console.log("[After] text1: " + el);
//   });
// };

function clickButton(driver) {
  var result = driver.findElement(By.id('Button1'))
  .click();
  console.log('Button clicked.');

function testing(driver) {
  driver.findElement(By.id('text1')).getText().then(function(el){
    console.log("text1: " + el);
    return el;
  });
  //return el;
}
  //driver.sleep(5000);
  //var button1 = driver.findElement(By.id('Button1')).click();
 // driver.wait(function(){
    //return button1.getCSSValue('opacity').then(function(result){
     // return result === '1';
 //   });
 // }, 15000);

//end program
function endProgram(number, callback) {
  process.exit(1);
};

//setTimeout(startWebsite,4000);

//begin mocha testing suite commands
describe('open browser', function(){
// Delay running the tests until after 5s
setTimeout(function() {
  run()
}, 6000);

  it('find button and click', function(done){
    //testing(driver);
    try {
     // var textBefore = testing(driver);
      clickButton(driver);
      //var textAfter = testing(driver);
    }
    catch {
      console.log('error occurred.');
    }
    finally{
      //setTimeout(function(textBefore,textAfter) {
        var textBefore = testing(driver);
        var textAfter = testing(driver);
        assert(textBefore === textAfter);
        done();
      //},7000);
    }
    });
});