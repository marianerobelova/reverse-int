module.exports = function reverse (n) {
    const stringN = String(Math.abs(n));
    const reversedString = stringN.split('').reverse().join('');
    return Number(reversedString)
}
