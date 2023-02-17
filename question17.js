// 17. Write a program which tells the number of days in a month.

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT",
"NOV", "DEC"]

const numberOfDays = month =>{
    let index
    for(let i=0;i<months.length;i++){
        if(month===months[i]){
            index=i
            break
        }
    }
    if(month==="FEB"){
        console.log("28 days")
    }
    else if(index%2===0){
        console.log("31 days")
    }
    else{
        console.log("30 days")
    }
}
numberOfDays("APR")