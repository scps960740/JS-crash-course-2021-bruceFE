// if的用法

// true or false
// let condition = 100 < 50
// console.log('condition', condition);

// + - * / 算數運算子
// && || ! 邏輯運算子

// && 兩邊都該是true 結果才是true (and)
// || 兩邊只要有一邊是true 結果就是true (or)
// ! 把結果反向

// let condition = ! (true || false)
// TODO del
// console.log('condition', condition)

// if (condition) {
//   // 當我們的條件成立要做的事情
//   console.log('確實大於50')
// } else {
//   // 當我們的條件沒有成立要做的事情
//   console.log('錯誤')
// }

// let scoreA = 59
// let scoreB = 100
// let condition = scoreA === scoreB
// > < >= <= === !==

// if (scoreA > scoreB) {
//   // TODO del
//   console.log('A考的比較高分')
// } else {
//   console.log('B考的比較高分')
// }

// let score = 100

// if (score >= 100) {
//   console.log('好棒棒')
// } else if (score > 70) {
//   console.log('再加油')
// } else if (score > 60) {
//   console.log('下次小心點')
// } else {
//   console.log('去補修！')
// }

// switch case

let key = 999
switch (key) {
  case 100:
    // TODO del
    console.log('考了100分')
    break;
  case 200:
    console.log('考了200分')
    break;
  case 300:
    console.log('考了300分')
    break;
  default:
    console.log('沒去考試')
    break;
}