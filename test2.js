// 문자열 일정하게 반복하기 - repeat()함수
let test = "123";
testRepeat = test.repeat(3);
console.log(testRepeat);

console.log("===========================================");

let strTest = ["A", "B", "C", "D", "E"];
for (let i = 0; i < strTest.length; i++) {
  console.log(strTest[i].repeat(i + 1));
}

console.log("===========================================");

const str = "i love you";
// toUpperCase()
upperStr = str.toUpperCase();
console.log(upperStr);

// toLowerCase()
lowerStr = upperStr.toLowerCase();
console.log(lowerStr);
