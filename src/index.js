module.exports = function reverse (n) {
    let nToString = Math.abs(n).toString();
    let arr = nToString.split('');
    let reverseArr = arr.reverse();
    let reverseStr = reverseArr.join('');
    let numberReverse = Number(reverseStr);
    return numberReverse;
}
