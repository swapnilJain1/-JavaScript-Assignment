// 24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).

let even =[]
let odd = []
const evenOddArray = maxLimit =>{
    for(let i=0;i<=maxLimit;i++){
        if(i%2===0){
            even.push(i)
        }
        else{
            odd.push(i)
        }
    }
}

evenOddArray(100)
console.log("Even number array", even)
console.log("Odd number array", odd)