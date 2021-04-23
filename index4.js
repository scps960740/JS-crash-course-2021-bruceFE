// For迴圈

// let a = 10
// a = a + 20
// a += 20
// console.log('a', a)

// i++ =>  i = i + 1
// i+=2 => i = i + 2
// for(let i = 5; i < 10; i+=2) {
//   console.log('i:', i)
// }



// 3個人的班級
// 0 1 2 -> classA的index
// let classA = [100, 70, 59]
// classA.push(40)
// TODO del
// console.log('classA', classA)
// console.log(classA[0])
// console.log(classA[1])
// console.log(classA[2])
// console.log(classA[3])
// for(let i = 0; i < classA.length; i++) {
//   console.log('i:', classA[i])
// }

// for(let i = 0; i < classA.length; i++) {
//   if (i === 2) {
//     classA[i] = 999
//   }
// }

// console.log('classA', classA)

// const a1 = {
//   name: '布魯斯',
//   desc: '貼文一'
// }

// console.log(a1.name) // a1的name是啥
// console.log(a1.desc) // a1的desc是啥

// [物件一, 物件二 .....]
// const posts = [
//   {
//     name: '布魯斯',
//     desc: '貼文一'
//   },
//   {
//     name: '布魯斯2號',
//     desc: '貼文二'
//   },
// ]

// for(let i = 0; i < posts.length; i++) {
//   if (i === 0) {
//     let post = posts[i]
//     console.log(post)
//   }
// }


// while迴圈

// let condition = true
// let target = 10
// let i = 0

// while (condition) {
//   if (i === target) {
//     condition = false
//   }
//   console.log(i)
//   // i = i + 1
//   i++
// }

let num = Math.random(0, 100) * 100
let num2 = Math.floor(num)

while (num2 < 80) {
  num = Math.random(0, 100) * 100
  num2 = Math.floor(num)
  console.log(num2)
}