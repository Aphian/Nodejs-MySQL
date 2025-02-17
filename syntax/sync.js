var fs = require('fs');

/*
// readFileSyncs 동기적 처리
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf-8');
console.log(result);
console.log('C');
*/

// readFile 비동기적 처리 <-- 이방법을 더 선호함
console.log('A');
fs.readFile('syntax/sample.txt', 'utf-8', function(err, result) {
    console.log(result);
});
console.log('C');