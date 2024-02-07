/**
 * Returns the string with the characters in reverse order
 * @param {string} text the string to be reversed
 */
function reverse(text) {
    console.log(text)
    if (text === "") {
        return "";
    } else {
        console.log(text.charAt(0));
        return reverse(text.substring(1)) + text.charAt(0);
    }
}

module.exports = reverse;
