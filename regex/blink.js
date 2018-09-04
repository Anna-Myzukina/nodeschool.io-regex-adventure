//Exercise 14
/*Implement a custom markdown operator that will translate all text between `@@...@@` and into `<blink>...</blink>` tags.
For example, `@@whatever@@` becomes `<blink>whatever</blink>`.
In addition to the `@@...@@` operator, your code should support existing markdown syntax, including inside `@@...@@` operators.
Your code should accept a string of markdown as input and return a string of html output
 */
module.exports = function (str) {
    var md = marked(str)
    return md.replace(/@@(.+?)@@/g, '<blink>$1</blink>')
}