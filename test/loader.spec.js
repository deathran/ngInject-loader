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
    ["TestClass9Dep1", "TestClass9Dep2", "TestClass9Dep3"],
    ["testFunction1Dep1", "testFunction1Dep2", "testFunction1Dep3"],
    ["testFunction2Dep1", "testFunction2Dep2", "testFunction2Dep3"],
    ["testFunction3Dep1", "testFunction3Dep2", "testFunction3Dep3"],
    ["testFunction4Dep1", "testFunction4Dep2", "testFunction4Dep3"],
    ["testFunction5Dep1", "testFunction5Dep2", "testFunction5Dep3"],
    ["testFunction6Dep1", "testFunction6Dep2", "testFunction6Dep3"],
    ["testFunction7Dep1", "testFunction7Dep2", "testFunction7Dep3"],
    ["testFunction8Dep1", "testFunction8Dep2", "testFunction8Dep3"],
    ["testFunction9Dep1", "testFunction9Dep2", "testFunction9Dep3"],
    ["TsTestClass1Dep1", "TsTestClass1Dep2", "TsTestClass1Dep3"],
    ["TsTestClass2Dep1", "TsTestClass2Dep2", "TsTestClass2Dep3"],
    ["TsTestClass3Dep1", "TsTestClass3Dep2", "TsTestClass3Dep3"],
    ["TsTestClass4Dep1", "TsTestClass4Dep2", "TsTestClass4Dep3"],
    ["TsTestClass5Dep1", "TsTestClass5Dep2", "TsTestClass5Dep3"],
    ["TsTestClass6Dep1", "TsTestClass6Dep2", "TsTestClass6Dep3", "TsTestClass6Dep4"],
    ["TsTestClass7Dep1", "TsTestClass7Dep2", "TsTestClass7Dep3"],
    ["TsTestClass8Dep1", "TsTestClass8Dep2", "TsTestClass8Dep3"],
    ["TsTestClass9Dep1", "TsTestClass9Dep2", "TsTestClass9Dep3"],
    ["TsTestClass10Dep1", "TsTestClass10Dep2", "TsTestClass10Dep3"],
    ["tsTestFunction1Dep1", "tsTestFunction1Dep2", "tsTestFunction1Dep3"],
    ["tsTestFunction2Dep1", "tsTestFunction2Dep2", "tsTestFunction2Dep3"],
    ["tsTestFunction3Dep1", "tsTestFunction3Dep2", "tsTestFunction3Dep3"],
    ["tsTestFunction4Dep1", "tsTestFunction4Dep2", "tsTestFunction4Dep3"],
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

                const regexp = new RegExp("\\.\\$inject=\\[\\S*" + wantedString + "\\S*\\]", 'g');

                expect(data).to.match(regexp);

                row.forEach(dep => {
                });
            })
        });

    })

});