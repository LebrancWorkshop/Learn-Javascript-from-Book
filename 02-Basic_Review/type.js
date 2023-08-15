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
