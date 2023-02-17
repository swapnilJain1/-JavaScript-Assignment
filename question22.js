// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [ 19, 22, 19, 24, 20, 25, 26, 24, 10, 25, 24]
console.log(ages.sort())

const minAge = ages[0]
console.log(`Min age is ${minAge}`)

const maxAge = ages[ages.length-1]
console.log(`Max age is ${maxAge}`)

console.log(`Range is ${maxAge - minAge}`)

const total = ages.reduce((acc,val) => acc+val,0)
const avg = total/ages.length
console.log(`Average age is ${avg}`)

const middleValue = Math.floor(ages.length/2)
console.log(`Median value is ${ages[middleValue]}`)

console.log(`${Math.abs(minAge-avg)}`)
console.log(`${Math.abs(maxAge-avg)}`)