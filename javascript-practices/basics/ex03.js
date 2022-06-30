/* null과 undefined */

var myVal1 = undefined; // 명시적으로 undefined 대입
var myVal2;             // 암시적으로 undefined 대입
var myVal3 = null;

console.log(myVal1, myVal2, myVal3);
// console.log(myVal4); // not defined error

console.log(myVal1 == myVal3);  // 값 비교
console.log(myVal1 === myVal3); // 값 비교 + 타입 비교

console.log("==================================================");
// ==   : eqaulity, 값의 동치성, 형변환
console.log(4 == parseInt('4'));
console.log(false == 0);
console.log('abc' == new String('abc'));

console.log(true + 10);                 // 11
console.log('abc' + new String('def')); // abcdef
console.log(1 + '11');                  // number -> string 111
console.log('11' + 1);

console.log("==================================================");
// === : identity
// 1. 타입의 동일성 + 값의 동일성: 기본 타입
// 2. 객체의 동일성 : 객체

console.log('2' === 2);
console.log(true === 1);
console.log(4 === 2);
console.log(new Number(4) === new Number(4));