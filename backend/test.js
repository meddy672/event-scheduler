const moment = require('moment');
const format = 'M/D/YYYY hh:mm A';

//const d1 = new Date('3/7/2021 9:40 am')
// console.log(d1); // tru

const check = moment('3/7/2021 01:13 PM', format);
const start = moment('3/7/2021 01:12 PM', format);
const end = moment('3/7/2021 05:12 PM', format);
console.log(check > start && check < end)
console.log(moment(check).isBetween(new Date(start), new Date(end), 'minute', '[]'))
console.log(moment(check).isBetween(new Date(start), new Date(end), 'minute', '[]'))
console.log([1,2.3].filter(num => num > 1))