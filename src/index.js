module.exports = function toReadable (number) {
    let numbersMap = new Map([
    [0, 'zero'],
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four'],
    [5, 'five'],
    [6, 'six'],
    [7, 'seven'],
    [8, 'eight'],
    [9, 'nine'],
    [10, 'ten'],
    [11, 'eleven'],
    [12, 'twelve'],
    [13, 'thirteen'],
    [14, 'fourteen'],
    [15, 'fifteen'],
    [16, 'sixteen'],
    [17, 'seventeen'],
    [18, 'eighteen'],
    [19, 'nineteen'],
    [20, 'twenty'],
    [30, 'thirty'],
    [40, 'forty'],
    [50, 'fifty'],
    [60, 'sixty'],
    [70, 'seventy'],
    [80, 'eighty'],
    [90, 'ninety']
    ]);
      
    const ones = number % 10;
    const tenths = Math.floor((number / (10 ** 1)) % 10); // this arcane formula calculates nth digit in a number, position is hardcoded
    const hundreds = Math.floor((number / (10 ** 2)) % 10);
    const lasTwoDigits = tenths * 10 + ones;

    if (number < 20) {
        return numbersMap.get(number);
    } else if (number < 100) {
        return (number % 10 === 0) ? numbersMap.get(number) : `${numbersMap.get(tenths * 10)}${ones === 0 ? '' : ' ' + numbersMap.get(ones)}`
    } else { // dont have to transform numbers over 999
        if (number % 100 === 0) {
            return `${numbersMap.get(hundreds)} hundred`;
        } else if (lasTwoDigits < 20) {
            return `${numbersMap.get(hundreds)} hundred ${numbersMap.get(lasTwoDigits)}`;
        } else {
            return `${numbersMap.get(hundreds)} hundred ${numbersMap.get(tenths * 10)}${ones === 0 ? '' : ' ' + numbersMap.get(ones)}`
        }
    }
}
