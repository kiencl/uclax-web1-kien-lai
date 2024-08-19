/*===================================
||
|| Data Types: Arrays
||
===================================*/
/*----------------------------------
Data Types: Arrays
----------------------------------*/
console.group("DataTypes: Arrays");
const myNum1 = 1234;
let myArr = [12, "string", "template string", myNum1];

console.log(myArr);
console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);

myArr.forEach((item, idx) => {
    console.log(item, idx);
});
console.groupEnd();
