let total = 0

function calculator(operator,num1,num2){
  if(operator==="+"){
    total = num1+num2
    }

  else if(operator==="-"){
  total = Math.abs(num1 - num2)
}
  
  else if(operator ==="*"){
  total = num1*num2
}
  else if(operator==="/"){
  total = num1/num2
}
  else{
  document.write("Please enter valid details")
}
  return total
}

document.write(calculator("-",10,50))