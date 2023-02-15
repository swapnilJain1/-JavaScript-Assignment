// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const day = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

let date = new Date()
let givenDate = new Date(1970, 01, 01);

console.log("year :", date.getFullYear());
console.log("month : ",month[date.getMonth()])
console.log("date : ",date.getDate());
console.log("day : ",day[date.getDay()]);
console.log("hour : ",date.getHours());
console.log("minute : ",date.getMinutes());
console.log(("time diff. in seconds",date - givenDate)/60);