// 13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

const is18 = prompt("Enter your age:")
if(is18>=18){
    console.log("Good for driving")
}
else{
    console.log("You are not 18 years old");
}
