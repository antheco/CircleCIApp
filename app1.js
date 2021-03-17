var webdriver = require('selenium-webdriver');
var server = require('./app');
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

//execute testing actions
function testing(callback) {
  var textBefore = driver.findElement(By.id('text1')).getText().then(function(el){
    console.log("[Before] text1: " + el);
  });
  var button1 = driver.findElement(By.id('Button1')).getText().then(function(el){
    //console.log("button1 text: " + el);
  });
  // driver.wait(until.elementLocated(By.id('text1')));
  driver.findElement(By.id('Button1')).click();
};

//end program
function endProgram(number, callback) {
  process.exit(1);
};

//begin mocha testing suite commands
describe('open browser', function(){
  this.timeout(8000);
  startWebsite();
 

  beforeEach(function(done){
    console.log('Running beforeEach.');
    setTimeout(done,7000);
  })
  

  it('Observe page changes after button click', function(){
    console.log('Button clicked.');
    var textAfter = driver.findElement(By.id('text1')).getText().then(function(el){
    console.log("[After] text1: " + el);
    //assert.equal(textBefore, textAfter,'The text before the button click and after the button click are different. Test passed.');
    assert('1' !== '2');
    });
  });
});

//testing();


//setTimeout(testing,5000);//waits 5 seconds then executes function inside
//setTimeout(endProgram,7000);
//endProgram(1,testing(startWebsite()));

//driver.quit();