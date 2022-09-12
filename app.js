//====>Example 01
let str = 'Cyber Firebug'
console.log(str.slice(0,5))
console.log(str.slice(0,-5))


//====>Example 02
let students = ['A','B','C','D','E']
let result = students.slice(1,4);
console.log(result)


//====>Example 03
let latters = ['A','B','C','D','E']
let new_array = latters.slice(-4,-3);
console.log(new_array)


//====>Example 04
let arr = ['A','B','C','D','E']
let new_arr = latters.slice(0,9);
console.log(new_arr)


//====>Example 05
let studentInfo = ['Naim','Borno','Farhan','Sad','Omar']
let newValue = studentInfo.slice(undefined,4)
console.log(newValue);