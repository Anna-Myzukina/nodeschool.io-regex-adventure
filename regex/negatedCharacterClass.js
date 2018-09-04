//Exercise 5
/*Write a module that returns true only when:
  the first character is not a digit
  and the second character is not a capital letter
 */
module.exports = function (str) {
    return /^[^0-9][^A-Z]/.test(str);
}