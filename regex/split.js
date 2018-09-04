//Exercise 8
/*Strings in javascript have a `.split()` method. `.split()` takes an argument that can be a string or a regex.
Write a module that accepts a string as its argument and returns an array that splits the string on commas separated by arbitrary amounts of whitespace
 */
module.exports = function (str) {
    return str.split(/\s*,\s*/);
}