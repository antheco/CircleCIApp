var webdriver = require('selenium-webdriver');
var server = require('../app');

//var {describe, it, after, before } = require('selenium-webdriver/testing'),
var By = webdriver.By,
until = webdriver.until;
var driver;

driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('http://google.com');