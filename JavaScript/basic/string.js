const str = 'hello wordld!!';

// slice
const sliceStr = str.slice(0, 5);
console.log('slice:', sliceStr);

// string -> array
// split
const splitStr = str.split(' ');
const splitStr2 = str.split('');
console.log(splitStr, splitStr2);

str.charAt(1);

// array -> string
// join
const joinStr = splitStr.join(' ');
const joinStr2 = splitStr2.join('');
console.log(joinStr, joinStr2);

console.log(str.charCodeAt(1));
console.log(str.codePointAt(1));

const n = 97;
console.log(String.fromCharCode(n));