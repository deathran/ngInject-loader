export class TsTestClass1 {
    constructor(TsTestClass1Dep1, TsTestClass1Dep2, TsTestClass1Dep3) {
        "ngInject";
    }
}

export class TsTestClass2 {
    constructor(TsTestClass2Dep1, TsTestClass2Dep2, TsTestClass2Dep3) {
        "ngInject";
    }
}

export class TsTestClass3 {
    constructor(
        TsTestClass3Dep1,
        TsTestClass3Dep2,
        TsTestClass3Dep3
    ) {
        "ngInject";
    }
}

export class TsTestClass4 {
    constructor(
        private TsTestClass4Dep1,
        private TsTestClass4Dep2,
        private TsTestClass4Dep3,
    ) {
        'ngInject';
    }
}

export class TsTestClass5 {
    constructor(
        private TsTestClass5Dep1: any,
        private TsTestClass5Dep2: any,
        private TsTestClass5Dep3: any,
    ) {
        'ngInject';
    }
}

export class TsTestClass6 {
    constructor(
        private TsTestClass6Dep1: Object,
        private TsTestClass6Dep2: string[],
        private TsTestClass6Dep3: number[],
        private TsTestClass6Dep4: Promise<any>[]
    ) {
        'ngInject';
    }
}

export class TsTestClass7 {
    constructor(
        private TsTestClass7Dep1: Object,
        private TsTestClass7Dep2: string[],
        private TsTestClass7Dep3: number[]
    ) {
        'ngInject';
    }
}

export class TsTestClass8 {
    constructor(
        private TsTestClass8Dep1: { a: string, b: Object },
        private TsTestClass8Dep2: { a: string[], b: Promise<any> },
        private TsTestClass8Dep3: { test123: number[] }
    ) {
        'ngInject';
    }
}

// Test readonly
export class TsTestClass9 {
    constructor(
        readonly TsTestClass9Dep1: any,
        readonly TsTestClass9Dep2: any,
        readonly TsTestClass9Dep3: any
    ) {
        'ngInject';
    }
}

// test private readonly
export class TsTestClass10 {
    constructor(
        private readonly TsTestClass10Dep1: any,
        private readonly TsTestClass10Dep2: any,
        private readonly TsTestClass10Dep3: any
    ) {
        'ngInject';
    }
}

export function tsTestFunction1(tsTestFunction1Dep1, tsTestFunction1Dep2, tsTestFunction1Dep3) {
    "ngInject";
}

export function tsTestFunction2(tsTestFunction2Dep1: any, tsTestFunction2Dep2: Promise<any>, tsTestFunction2Dep3: Object) {
    "ngInject";
}

export function tsTestFunction3(tsTestFunction3Dep1: any, tsTestFunction3Dep2: Promise<any>, tsTestFunction3Dep3: string[]) {
    "ngInject";
}

export function tsTestFunction4(
    tsTestFunction4Dep1: { a: string, b: any },
    tsTestFunction4Dep2: { a: Promise<any> },
    tsTestFunction4Dep3: { a: Promise<any>, b: number[] }) {
    "ngInject";
}
