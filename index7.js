// callback 回呼
window.addEventListener('load', function () {
  const p1 = document.getElementById('title')
  p1.innerText = "訂閱布魯斯前端"

  const b1 = document.getElementById('btn')


  b1.addEventListener('click', function () {
    console.log('點下去')
  })

  const box1 = document.getElementById('box')
  box1.innerHTML = '<p>Test</p>'

  const in1 = document.getElementById('input1')
  in1.addEventListener('keyup', function (e) {
    console.log('e.target.value', e.target.value)
  })
  
})

