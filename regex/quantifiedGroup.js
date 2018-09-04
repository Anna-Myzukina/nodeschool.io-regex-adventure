//Exercise 12
/*Export a function that takes a string argument and returns whether the string contains exactly 8 columns of hex codes formatted like: 0xFF with one or more characters of trailing whitespace after each hex code to separate the columns.
The hex codes begin with `0x` and have exactly 2 more characters, which may be uppercase `A-F` or lowercase `a-f` or any digit
*/
module.exports = function (str) {
    return /^(0x[a-fA-F\d]{2}\s+){8}$/.test(str)
}
