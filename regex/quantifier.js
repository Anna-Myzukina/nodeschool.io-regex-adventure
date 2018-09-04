//Exercise 7
/*Export a function that takes a filename string as an argument and returns
whether the entire filename is a sequence of one or more digits followed by
`.jpg` or `.jpeg`
 */
module.exports = function (str) {
    return /^\d+\.jpe?g$/.test(str);
}