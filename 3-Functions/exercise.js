var twoFer = function (name) {
    if (name === void 0) { name = 'you'; }
    return "One for ".concat(name, ", one for me.");
};
console.log(twoFer());
console.log(twoFer('Alice'));
var isLeapYear = function (year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
};
console.log(isLeapYear(1997)); // false
console.log(isLeapYear(1996)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true
