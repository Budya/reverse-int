module.exports = function reverse(n) {
    let reverseTemp = n.toString().split('');
    let isMinus = reverseTemp[0] === '-';
    reverseTemp = reverseTemp.reverse().join('');

    if (isMinus) {
        return reverseTemp.slice(0, -1);
    }

    return reverseTemp;
}
