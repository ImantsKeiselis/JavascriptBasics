// var printNumTwo;
// for (var i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function() {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());
// why it will print number 3 not 1 2 3 0
let printNum2;
for (i = 0; i < 3; i++) {
  if (i === 2) {
    printNum2 = function() {
      return i;
    };
  }
}
console.log(printNum2());
console.log(i);
// 2 and an error?