// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const  countries = ["India","France","Australia"]

const countryIndex = countries.indexOf("Ethiopia")

if(countryIndex=== -1){
    countries.push("ETHIOPIA")
    
}
else{
    countries[countryIndex]= "ETHIOPIAS"
}
console.log(countries)