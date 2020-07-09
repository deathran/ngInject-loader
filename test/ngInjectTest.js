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
        TestClass4Dep1, TestClass4Dep2, TestClass4Dep3
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

export default class TestClass7 {

    constructor(
        TestClass7Dep1,
        TestClass7Dep2,
        TestClass7Dep3
    ) {
        "ngInject";
    }
}

// class with trailing comma
export class TestClass8 {

    constructor(
        TestClass8Dep1,
        TestClass8Dep2,
        TestClass8Dep3,
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
    testFunction4Dep1,
    testFunction4Dep2,
    testFunction4Dep3
) {
    "ngInject";
};
export const testFunction5 = function(
    testFunction5Dep1, testFunction5Dep2, testFunction5Dep3
) {
    "ngInject";
};

export function testFunction6(
    testFunction6Dep1, testFunction6Dep2, testFunction6Dep3) {
    "ngInject";
}

// test with trailing comma
export function testFunction7(
    testFunction7Dep1, testFunction7Dep2, testFunction7Dep3,) {
    "ngInject";
}

// test with trailing comma2
export function testFunction8(
    testFunction8Dep1,
    testFunction8Dep2,
    testFunction8Dep3,
) {
    "ngInject";
}