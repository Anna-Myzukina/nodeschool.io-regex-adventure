//Exercise 6
/*Export a function that takes a string argument and returns whether the string
ends with a literal `.` (dot)
 */
module.exports = function (str) {
    return /\.$/.test(str);
}