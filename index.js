'use strict';


exports.stringHandler = function(str) {
    const multiplyResult = str.replace(/[a-z]+\*\d+/g, function (match) {
        return match.split("*")[0].repeat(+match.split("*")[1])
    })

    const addingResult = multiplyResult.replace(/[a-z]+(\+[a-z]+)*/g, function (match) {
        return match.split("+").join("")
    })

    return addingResult.replace(/\([a-z]+\)\*\d+/g, function (match) {
        const exprInBrackets = match.split("*")[0]
        return exprInBrackets.substring(1, exprInBrackets.length-1).repeat(+match.split("*")[1])
    })
}

console.log(exports.stringHandler('(abc*3+trc)*2 '));
