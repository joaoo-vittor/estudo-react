// Foreach
const nums = [1,2,3,4,5,6,7,8,9]

for (let v of nums) {
  console.log(v)
}

nums.forEach((valor, index, array) => {
  console.log(valor, index, array)
})

