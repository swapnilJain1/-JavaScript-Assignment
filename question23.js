// 23. Write a program to check that the number given by the user is a prime number or not.


const isPrime = number =>{
    let prime = true
    for(let i=2;i<number/2;i++){
        if(number%i===0){
            return prime =false
        }
    }
    return prime
}

console.log(isPrime(30))