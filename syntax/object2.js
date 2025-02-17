// array & Object

// 연관된 처리방법에 이름을 붙이고 다른것들과 구분 --> function
var f = function () {
    console.log(1+1);
    console.log(1+2);
}
var a = [f];
a[0]();

var o = {
    func: f,
}
o.func();