/**
 *  named export I
 * 
 *  1.  exports.name = ...: commonJS(require)와 유사하다.
 *  2.  이 모듈을 import할 때에는 destructiong이 가능하다.
 */

export const add = function(a, b) {
    return a + b;
}

export const subtract = function(a, b) {
    return a - b;
}

// 오류: 이름 없이 export를 하기 때문에 하나만 default로 export할 수 있다.
// export default function(a, b, c) {
//     return a + b + c;
// }
