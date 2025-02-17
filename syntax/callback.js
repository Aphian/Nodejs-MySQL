/*
function a() {
    console.log('A');
}
 */

// 익명함수 변수에 저장을 해야함
var a = function() {
    console.log('A');
}
// a();

function slowfunc(callback) {
    callback();
}

slowfunc(a);