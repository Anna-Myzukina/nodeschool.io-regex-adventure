// exercise 2
/*This time your regex should match only when the given string begins with
"LITERALLY"
 */
module.exports = function (str) {
    return /^LITERALLY/.test(str);
  }