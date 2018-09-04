//Exercise 3
/*This time your regex should match only when the given string ends with
"BANANAS"
 */
module.exports = function (str) {
    return /BANANAS$/.test(str);
}