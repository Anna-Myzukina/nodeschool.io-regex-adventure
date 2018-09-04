//Exercise 10
/*Just like before, export a module that searches for `x=` followed by a number and return the number found after the equal sign.
Unlike before, your solution should only match `x=` when there are no word
characters immediately before `x=` or immediately after the number to the right of the equal sign
 */
module.exports = function (str) {
    var m = /\bx=(\d+)\b/.exec(str);
    return m ? m[1] : null
}