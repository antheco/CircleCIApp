var webdriver = require('selenium-webdriver');
var server = require('../../app');
var chrome = require('selenium-webdriver/chrome');
var chai = require('chai');

//var {describe, it, after, before } = require('selenium-webdriver/testing'),
var By = webdriver.By,
assert = chai.assert;
until = webdriver.until;
//var driver;

describe('open browser', function(){
  this.timeout(50000);

    beforeEach(function(){
        driver = new webdriver.Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options())
        .build();
        driver.get('http://localhost:3000');

        var text1 = driver.findElement(By.id('text1')).getText().then(function(el){
          console.log("text1: " + el);
        });

        var button1 = driver.findElement(By.id('Button1')).getText().then(function(el){
          console.log("button1 text: " + el);
        });
    });

    it('find button and click', function(){
  
    //    driver.wait(until.elementLocated(By.id('text1')),5000);
       
      driver.findElement(By.id('Button1')).click();

       var button1 = driver.findElement(By.id('text1')).getText().then(function(el){
          console.log("text1 text: " + el);
          assert.notEqual(el, 'This is text.');
        });
       //done();
    //     //button
    });
    afterEach(function(){
      //driver.wait(until.elementLocated(By.id('text1')),5000);
  //    driver.wait(until.titleIs('This is a webpage.'),3000);
     // process.exit(1);  
      //driver.quit();
    });

    //setTimeout(it(),5000);//waits 5 seconds then executes function inside
    //setTimeout(afterEach(),7000);//waits 5 seconds then executes function inside
  });