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

function clickButton() {
  var result = driver.findElement(By.id('Button1'))
  .click();
  console.log('Button clicked.');
};

function testing() {
  try{
  //   var result = driver.findElement(By.id('text1')).getText().then(function(el){
  //   console.log("text1: " + el);
  //   return el;
  // });
    var result = driver.wait(until.elementsLocated(By.id('text1')));
    global.var1 = ''
  }catch(e){
    console.log(e)
  }finally{
    //console.log('finally');
    var result = driver.findElement(By.id('text1')).getText().then(function(el){
         //console.log("text1: " + el);
    global.var1 = el;
    console.log(global.var1);
    return global.var1;

  })
  return global.var1;
  }
};

function endProgram(number, callback) {
  process.exit(1);
};

//begin mocha testing suite commands
describe('open browser', function(){
// Delay running the tests until after 5s
setTimeout(function() {
  run()
}, 5000);

  it('find button and click', function(done){
   // var textBefore = testing(driver);
   this.timeout(4500);
   //setTimeout(function () {
    testing();
    console.log(global.var1);
    
    var pro1 = new Promise((resolver, reject)=> {
      if(global.var1 === 'Loading button click data.'){
      resolver(clickButton());
    }
    else{
      console.log('waiting');
    }
    }).then((data)=> {
         assert(textBefore === textAfter);
         done();
       }).catch((e) =>{
         console.log('error');
       });
    //clickButton();
    //testing();
   //},3000);
//    var returnval = testing();
   // clickButton(driver);
   // console.log('Click button occurred.');
    //setTimeout(function(textBefore,textAfter) {

    //  var textAfter = testing(driver);
    // assert(textBefore === textAfter);
    //  done();
      
//promise start
    // var user = new Promise((resolver, reject)=> {
    // console.log('step 1 running');
    // if(testing() === 1){
    //     resolver(console.log('resolver ran.'));
    // }
    // else {
    //     reject(console.log('reject ran'));
    // }
    // }).then((data)=> {
    //   assert(textBefore === textAfter);
    //   done();
    // }).catch((e) =>{
    //   console.log('error');
    // });
    //promise end 
  });
});