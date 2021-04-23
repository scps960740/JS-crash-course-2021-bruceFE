// 物件 Array
let classA = ['小明', '小白', '小華']
// console.log('轉學前：', classA)

classA.push('小黃')
// console.log('轉學後：', classA)

let igPhotos = [
  'https://xx.img.com/a1.png',
  'https://xx.img.com/a2.png',
  'https://xx.img.com/a3.png'
]

// console.log('第1筆', igPhotos[0]) // index = 0
// console.log('第2筆', igPhotos[1])
// console.log('第3筆', igPhotos[2])
// console.log('第4筆', igPhotos[4])

// TODO del
// console.log('igPhotos', igPhotos)
// console.log('igPhotos len', igPhotos.length)
// 長度
// TODO del
// console.log(classA.length)

// 物件 Object
const card = {
  name: '布魯斯前端的名片',
  addres: '新加坡xxxxxx',
  age: 999,
}

// TODO del
console.log('名字', card.name) // . => card的name

const post = {
  image: 'https://xx.img.com/a1.png',
  desc: '這是一張圖片',
  date: '2022/02/02',
  comment: ['好漂亮', '我也要去...']
}

const post2 = {
  image: 'https://xx.img.com/a2.png',
  desc: '這是一張圖片',
  date: '2022/02/03',
  comment: ['好漂亮', '我也要去...', '好漂亮', '我也要去...'], 
}

const wall = [
  post,
  post2,
]

// TODO del
// console.log('wall', wall)