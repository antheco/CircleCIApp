///////////////////////////////////////////////////////////////////////////////////////////////////////
//Name: buttontest.js
//Author: Anthony Economou
//Date: 2020-10-05
//Description: Used to test webpage button functionality.
////////////////////////////////////////////////////////////////////////////////////////////////////////

//declare variables
var webdriver = require('selenium-webdriver');
var server = require('../app');
var chrome = require('selenium-webdriver/chrome');
var assert = require('assert');
var driver;
var By = webdriver.By,
until = webdriver.until;

//startWebsite function:kicks off the webdriver to run the webpage
function startWebsite() {
  driver = new webdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions(new chrome.Options().addArguments("start-maximized"))
  .build();
  driver.get('http://localhost:3000');
  
};

//testing function: used to check the text element's text content before button press.
function testing(callback) {
  driver.findElement(By.id('text1')).getText().then(function(el){
    console.log("[Before] text1: " + el);
    textBefore = el;
  });
  var button1 = driver.findElement(By.id('Button1')).getText().then(function(el){
  });

//simulate button click.
  driver.findElement(By.id('Button1')).click();
  console.log('Button clicked.');

  //re-check the text element for updated text content.
  driver.findElement(By.id('text1')).getText().then(function(el){
  console.log("[After] text1: " + el);
  textAfter = el;
  
//compare the text content of the webpage before and after the button click, if they are different = test is successful!
  try{
    assert(textBefore !== textAfter); //button updated the text element's text - test successful
    console.log('TEST PASSED: Text changed after button press.'); 
  }
  catch{
    console.log('TEST FAILED: Text did not changed after button press.'); // text element's text content has not changed - test failure
    process.exit(1);
  }
  });
}
//endProgram function: ends nodejs program with a return code (0).
function endProgram(number, callback) {
    process.exit(0);
};

//main functions called
startWebsite();
setTimeout(testing,5000);//waits 5 seconds then executes function inside
setTimeout(endProgram,7000);