/**
 * Data Type has 2 categories
 * - Primative Data Type
 * - Object
 *
 * Primative Data Type
 * - null
 * - undefined
 * - Number
 * - String
 * - Boolean
 * - Symbol
 */

// null -> เก็บชนิดข้อมูลเป็น Object เมื่่อตัวแปรไม่มีการอ้างถึง Object แล้ว ก็จะให้มีค่าเป็น null
// undefined -> เมื่อประกาศตัวแปรขึ้นมา แต่ไม่มีการกำหนดค่าตัวแปรให้ ก็จะมีค่าเป็น undefined โดย Javascript จะใช้ตัวแปรที่เป็นของ Object Global ที่ชื่อ undefined มาเก็บค่าที่เป็น undefined อีกที

console.log(null == undefined); // true
console.log(null === undefined); // false

// Number -> เก็บค่าของตัวเลข มีทั้งเลขจำนวนเต็ม (Integer) และ เลขทศนิยม (Float)
console.log(100, 0, -1, 1.5, -3.9);
console.log(2e7); // 20000000 (2 * 10^7)
console.log(2e-1); // 0.2 (2 * 10^-1)

console.log(Infinity); // Infinity
console.log(Infinity + Infinity); // Infinity
console.log(Infinity * Infinity); // Infinity
console.log(Infinity / Infinity); // NaN

console.log(5 / 0); // Infinity
console.log(0 / 0); // NaN
console.log(-3 / 0); // -Infinity
console.log(parseInt('Prayuth')); // NaN
console.log(Number('Prawit')); // NaN
console.log(Math.sqrt(-1)); // NaN

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MAX_VALUE + 10); // 1.7976931348623157e+308
console.log(Number.MAX_VALUE * 10); // Infinity
console.log(Number.MAX_VALUE / 10); // 1.7976931348623157e+307
console.log(Number.MAX_VALUE * -100); // -Infinity

console.log(Number.MIN_VALUE); // 5e-324

console.log(typeof(Number.MAX_VALUE + 100)); // number
console.log(typeof Infinity); // number
console.log(typeof NaN); // number

// String -> ข้อมูลที่ถูกครอบด้วยเครื่องหมาย "" หรือ ''
console.log('Learning Javascript'); // Learning Javascript
console.log('Learning "Javascript"'); // Learning "Javascript"
console.log('Learning \'Javascript\''); // Learning 'Javascript'
console.log("Learning Javascript"); // Learning Javascript
console.log("Learning 'Javascript'"); // Learning 'Javascript'
console.log("Learning \"Javascript\""); // Learning "Javascript"

/**
 * Escape Character
 * - \0 => NUL (ASCII = 0, null)
 * - \' => single quote (ASCII = 39, ')
 * - \" => double quote (ASCII = 34, ")
 * - \\ => backslash (ASCII = 92, \)
 * - \n => new line
 * - \r => carriage return
 * - \v => vertical tab
 * - \t => tab
 * - \b => backspace
 * - \f => form feed
 * - \xXX => latin-1 character
 * - \uXXXX => unicode
 * - \u{XXXX} => unicode code point
 */
console.log('Srettha\rThavisin\nNew Candidate'); // Srettha [new line] Thavisin [new line] New Candidate

