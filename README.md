# ngInject-loader

A webpack 4 loader for AngularJs >1.5 ngInject Tags

# Usage

To add the ngInject loader, add this to your webpack.js

```
module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                use: [{
			loader: '@deathran/nginject-loader'
		}],
                exclude: /node_modules/
            }
        ]
    }
```

Now when using the "ngInject" string either at the start of your functions or in the constructor, the AngularJs
Injections will be resolved correctly

# Typescript

see example in ./webpack.config.js for a running typescript example

# Test

Se the files `ngInjectJsTest.js` and `ngInjectTsTest.ts` for a list of supported formats.

Run the tests with `npm run test`

# Known Issues

In TypeScript nested types are currently not supported. I.e.

```
// Works:
class MyClass {
    constructor(
        private dependency1: any[],
        private dependency2: { a: string, b: number}
    ) {
        'ngInject';    
    }
}

// Does not work, due to to high nesting
class BrokenClass {
    constructor(
        private dependency1: { a: {b: string, c: string} }    
    ) {
        'ngInject';    
    }
}
```
