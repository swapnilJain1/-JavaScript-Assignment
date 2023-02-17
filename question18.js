// 18. Write a program which tells the number of days in a month, now consider leap year.

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT",
"NOV", "DEC"]

const numberOfDays = (month,year) =>{
    let index
    for(let i=0;i<months.length;i++){
        if(month===months[i]){
            index=i
            break
        }
    }
    if(month==="FEB"){
        if(year%4===0){
            console.log("29 days")
        }else
        console.log("28 days")
    }
    else if(index%2===0){
        console.log("31 days")
    }
    else{
        console.log("30 days")
    }
}
numberOfDays("FEB",2004)