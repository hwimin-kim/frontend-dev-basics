/**
 *  let: Block Scope의 변수
 */

try {
    if(true){
        let i = 20;
        var j = 10;
    }

    console.log(j);
    console.log(i);
} catch (error) {
    console.error('[오류]' + error);
}

// cf. var의 함수 범위
try {
    let f = function() {
        // var m = 20;
        let m = 20;
    }

    f();
    console.log(m);
} catch (error) {
    console.error('[오류]' + error);
}