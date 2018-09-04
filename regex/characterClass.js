//Exercise 4
/*Write a module that returns true only when the input string starts with a lower-case vowel or a digit
 */
module.exports = function (str) {
    return /^[0-9aeiou]/.test(str);
}