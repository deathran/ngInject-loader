const NG_INJECT_IDENTIFIER = 'ngInject';
const CLASS_IDENTIFIER_REGEX = /\sclass\s+(\w+)/;
const FUNCTION_IDENTIFIER_REGEX = /\sfunction\s(\w+)/;
const FUNCTION_ASSIGNMENT_REGEX = /(\w*)\W+function/;

module.exports = async function(source) {

    const hasNgInject = source.includes(NG_INJECT_IDENTIFIER);

    if (!hasNgInject) {
        return `${source}`;
    }

    const allLines = source.split('\n');

    const lineHits = getHits(allLines);

    let split = {};
    lineHits.forEach(hit => {
        for (let i = hit; i >= 0; i--) {
            const lineContent = allLines[i];

            if (FUNCTION_IDENTIFIER_REGEX.test(lineContent) || FUNCTION_ASSIGNMENT_REGEX.test(lineContent)) {
                let match = null;
                if (lineContent.includes('=')) {
                    match = FUNCTION_ASSIGNMENT_REGEX.exec(lineContent)
                } else {
                    match = FUNCTION_IDENTIFIER_REGEX.exec(lineContent);
                }

                const className = match[1];

                split[className] = getArgumentsFromInjector(allLines, i);

                break;
            }

            if (lineContent.toLowerCase().includes('constructor')) {
                for (let j = i; j >= 0; j--) {
                    const currentLineContent = allLines[j];

                    if (CLASS_IDENTIFIER_REGEX.test(currentLineContent)) {
                        const match = CLASS_IDENTIFIER_REGEX.exec(currentLineContent);
                        const className = match[1];

                        split[className] = getArgumentsFromInjector(allLines, i);

                        break;
                    }
                }

                break;
            }
        }
    });

    if (Object.keys(split).length) {
        for (key in split) {

            const injection = `${key}.$inject = ${JSON.stringify(split[key])}`;
            allLines.push(injection);
        }
    }

    return allLines.join('\n');
};

/**
 *
 * @param {array} lines
 * @return {[]}
 */
function getHits(lines) {
    const lineHits = [];
    lines.forEach((element, index) => {
        if (element.includes(NG_INJECT_IDENTIFIER)) {
            lineHits.push(index);
        }
    });

    return lineHits;
}

/**
 *
 * @param {array} allLines
 * @param {int} constructorPosition
 */
function getArgumentsFromInjector(allLines, constructorPosition) {
    const start = '(';
    const end = ')';

    let startHit = null;
    let endHit = null;

    let fullContent = '';
    for (let i = constructorPosition; i <= allLines.length; i++) {
        const content = allLines[i];
        fullContent += content;

        if (content.includes(start)) {
            startHit = i;
        }

        if (content.includes(end)) {
            endHit = i;
        }

        if (endHit !== null && startHit !== null) {
            break;
        }
    }

    const indexOfStart = fullContent.indexOf('(');
    const indexOfEnd = fullContent.indexOf(')');

    const between = fullContent.substr(
        indexOfStart + 1,
        indexOfEnd - indexOfStart - 1
    );

    const constructorArguments = between.split(' ').join('').split(',');

    return constructorArguments;

}