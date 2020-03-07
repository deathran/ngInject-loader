export class TestClass1 {
    constructor(TestClass1Dep1, TestClass1Dep2, TestClass1Dep3) {
        "ngInject";
    }
}

export class TestClass2 {
    constructor(TestClass2Dep1, TestClass2Dep2, TestClass2Dep3) {
        "ngInject";
    }
}

export class TestClass3 {
    constructor(
        TestClass3Dep1,
        TestClass3Dep2,
        TestClass3Dep3
    ) {
        "ngInject";
    }
}

export class TestClass4 {
    constructor(
        TestClass3Dep1, TestClass3Dep2, TestClass3Dep3
    ) {
        "ngInject";
    }
}

export class TestClass5 {
    constructor(TestClass5Dep1, TestClass5Dep2, TestClass5Dep3
    ) {
        "ngInject";
    }
}

export class TestClass6 {
    constructor(TestClass6Dep1, TestClass6Dep2,
        TestClass6Dep3
    ) {
        "ngInject";
    }
}

export function testFunction1(testFunction1Dep1, testFunction1Dep2, testFunction1Dep3) {
    "ngInject";
}

export function testFunction2(
    testFunction2Dep1,
    testFunction2Dep2,
    testFunction2Dep3
) {
    "ngInject";
}

export const testFunction3 = function(testFunction3Dep1, testFunction3Dep2, testFunction3Dep3) {
    "ngInject";
};
export const testFunction4 = function(
    testFunction3Dep1,
    testFunction3Dep2,
    testFunction3Dep3
) {
    "ngInject";
};
export const testFunction5 = function(
    testFunction5Dep1, testFunction5Dep2, testFunction5Dep3
) {
    "ngInject";
};

function testFunction6(
    testFunction6Dep1, testFunction6Dep2, testFunction6Dep3) {
    "ngInject";
}