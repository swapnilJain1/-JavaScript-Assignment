// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F
const grades = (marks) =>{
    if(marks>=80){
        console.log("A grade")
    }
    else if(marks>=70){
        console.log("B grade")
    }
    else if(marks>=60){
        console.log("C grade")
    }
    else if(marks>=50){
        console.log("D grade")
    }
    else{
        console.log("F grade")
    }
}

