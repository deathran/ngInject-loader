const expect = require('chai').expect;
const fs = require('fs');
const {describe, it} = require('mocha');

const data = fs.readFileSync(__dirname + '/../dist/main.js', 'utf8');

const shouldHaveInjections = [
    ["TestClass1Dep1", "TestClass1Dep2", "TestClass1Dep3"],
    ["TestClass2Dep1", "TestClass2Dep2", "TestClass2Dep3"],
    ["TestClass3Dep1", "TestClass3Dep2", "TestClass3Dep3"],
    ["TestClass4Dep1", "TestClass4Dep2", "TestClass4Dep3"],
    ["TestClass5Dep1", "TestClass5Dep2", "TestClass5Dep3"],
    ["TestClass6Dep1", "TestClass6Dep2", "TestClass6Dep3"],
    ["TestClass6Dep1", "TestClass6Dep2", "TestClass6Dep3"],
    ["TestClass7Dep1", "TestClass7Dep2", "TestClass7Dep3"],
    ["TestClass8Dep1", "TestClass8Dep2", "TestClass8Dep3"],
    ["testFunction1Dep1", "testFunction1Dep2", "testFunction1Dep3"],
    ["testFunction2Dep1", "testFunction2Dep2", "testFunction2Dep3"],
    ["testFunction3Dep1", "testFunction3Dep2", "testFunction3Dep3"],
    ["testFunction4Dep1", "testFunction4Dep2", "testFunction4Dep3"],
    ["testFunction5Dep1", "testFunction5Dep2", "testFunction5Dep3"],
    ["testFunction6Dep1", "testFunction6Dep2", "testFunction6Dep3"],
    ["testFunction7Dep1", "testFunction7Dep2", "testFunction7Dep3"],
    ["testFunction8Dep1", "testFunction8Dep2", "testFunction8Dep3"],
];

describe('Check if the compiled file has been rendered correctly', function() {

    it('should render correctly', () => {
        expect(data).to.be.a('string');
    })

    describe('Dependencies should be rendered correctly', () => {
        shouldHaveInjections.forEach(row => {

            it('should have the depedencies for ' + JSON.stringify(row), () => {
                let wantedString = '\"';
                const string = row.join("\",\"");
                wantedString += string + '\"';

                const regexp = new RegExp("\\.\\$inject=\\[.*" + wantedString + ".*\\]", 'g');

                expect(data).to.match(regexp);

                row.forEach(dep => {
                });
            })
        });

    })

});