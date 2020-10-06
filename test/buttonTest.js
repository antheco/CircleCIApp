var webdriver = require('selenium-webdriver');
var server = require('../app');
var chrome = require('selenium-webdriver/chrome');
var assert = require('assert');

var driver;
var By = webdriver.By,
until = webdriver.until;

function startWebsite() {
  driver = new webdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions(new chrome.Options().addArguments("start-maximized"))
  //  .add_experimental_option('excludeSwitches', ['enable-logging'])
  .build();
  driver.get('http://localhost:3000');
  
};

function testing(callback) {
  var prom1 = driver.findElement(By.id('text1')).getText().then(function(el){
    console.log("[Before] text1: " + el);
    textBefore = el;
  });
  var button1 = driver.findElement(By.id('Button1')).getText().then(function(el){
    //console.log("button1 text: " + el);
  });
  // driver.wait(until.elementLocated(By.id('text1')));
  driver.findElement(By.id('Button1')).click();
  //button1.click();
  
  console.log('Button clicked.');
  var prom2 = driver.findElement(By.id('text1')).getText().then(function(el){
  console.log("[After] text1: " + el);
  textAfter = el;
  //assert(textBefore === textAfter);
  try{
    //assert('1' === '1');
    assert(textBefore !== textAfter);
    console.log('TEST PASSED: Text changed after button press.');
  }
  catch{
    console.log('TEST FAILED: Text did not changed after button press.');
  }
  });
}

//testing();

function endProgram(number, callback) {
  // driver.wait(function() {
  //   return driver.executeScript('return document.readyState').then(function(readyState) {
  //     return readyState === 'complete';
  //   });
  // });
    process.exit(1);
};

startWebsite();
setTimeout(testing,5000);//waits 5 seconds then executes function inside
setTimeout(endProgram,7000);
//endProgram(1,testing(startWebsite()));

//driver.quit();