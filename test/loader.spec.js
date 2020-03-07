const expect = require('chai').expect;
const fs = require('fs');

const data = fs.readFileSync(__dirname + '/../dist/main.js', 'utf8');

const shouldHaveInjections = [
    ["TestClass1Dep1", "TestClass1Dep2", "TestClass1Dep3"],
    ["TestClass2Dep1", "TestClass2Dep2", "TestClass2Dep3"],
    ["TestClass3Dep1", "TestClass3Dep2", "TestClass3Dep3"],
    ["TestClass4Dep1", "TestClass4Dep2", "TestClass4Dep3"],
    ["TestClass5Dep1", "TestClass5Dep2", "TestClass5Dep3"],
    ["TestClass6Dep1", "TestClass6Dep2", "TestClass6Dep3"],
    ["TestClass6Dep1", "TestClass6Dep2", "TestClass6Dep3"],
    ["testFunction1Dep1", "testFunction1Dep2", "testFunction1Dep3"],
    ["testFunction2Dep2", "testFunction2Dep2", "testFunction2Dep3"],
    ["testFunction3Dep2", "testFunction3Dep2", "testFunction3Dep3"],
    ["testFunction4Dep2", "testFunction4Dep2", "testFunction4Dep3"],
    ["testFunction5Dep2", "testFunction5Dep2", "testFunction5Dep3"],
    ["testFunction6Dep2", "testFunction6Dep2", "testFunction6Dep3"],
];

expect(data).to.be.a('string');

shouldHaveInjections.forEach(row => {
    const string = JSON.stringify(row);
    expect(data).to.match(RegExp(string));
});