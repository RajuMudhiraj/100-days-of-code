

let tOut = new Promise((resolve, reject) => {
    setTimeout(() => {resolve('1')}, 3000)
})

let tOut2 = new Promise((resolve, reject) => {
    setTimeout(() => {resolve('2')}, 2000)
})

let tOut3 = new Promise((resolve, reject) => {
    setTimeout(() => {resolve('3')}, 1000)
})

  

Promise.all([tOut, tOut2, tOut3]).then((value) => value.map((val) => console.log(val)))
