// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm
let date = new Date()

const year =date.getFullYear()
const month = date.getMonth()
const today = date.getDate()
const hour = date.getHours()
const minute = date.getMinutes()

console.log(`${year} - ${month} - ${today}  ${hour}:${minute}`)