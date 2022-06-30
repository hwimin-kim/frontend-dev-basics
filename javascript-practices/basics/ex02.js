/*
    변수와 자료형(Data Type)
    [기본타입(Primitive Type)]
    - undefined
    - number
    - string
    - boolean
    [객체타입]
    - object
        1.  new 생성자() 사용해서 생성
                Number()
                String()
                Boolean()
                Object()
                Array()
                Date()
                Function()
                RegExp()
        2.  {} 객체 리터럴, JSON
        3.  [] 배열 리터럴
        4. null
    - function
*/

var u = undefined; // var u;
var i = 10;
var s = "Hello World";
var b = true;

console.log("==========기본타입[primitive, 원시]==========");
console.log("u:" + typeof(u));
console.log("i:" + typeof(i));
console.log("s:" + typeof(s));
console.log("b:" + typeof(b));

console.log("==========객체타입1[object type]==========");
var i2 = new Number(10);
var s2 = new String("Hello World");
var b2 = new Boolean(true);
var o = new Object(true);
var a = new Array(true);
var d = new Date(true);  

var o2 = {};
var a2 = [];
var n = null;

console.log("i2:" + typeof(i2));
console.log("s2:" + typeof(s2));
console.log("b2:" + typeof(b2));
console.log("o:" + typeof(o));
console.log("o2:" + typeof(o2));
console.log("a:" + typeof(a));
console.log("a2:" + typeof(a2));
console.log("d:" + typeof(d));
console.log("n:" + typeof(n));

console.log("==========객체타입2[function type]==========");
function f() {
}
console.log("f:" + typeof(f));

// 원시 타입의 메소드가 호출 될 때...
// 임시 Wrapper 객체가 만들어져서 메소드 호출이 일어난 뒤 사라진다: 유사 객체
console.log("==========원시 타입도 메소드 호출이 가능하다?==========");
console.log(b.valueOf()); // new Boolean(b).valueof();
console.log(b2.valueOf());