//Exercise 1
/*For our first adventure, create a new file that will receive a string as an
argument and should return whether the string contains another string,
"LITERALLY".
*/
module.exports = function (str) {
    return /LITERALLY/.test(str);
}
