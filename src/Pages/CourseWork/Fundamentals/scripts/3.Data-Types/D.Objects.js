/*===================================
||
|| Data Types: Objects
||
===================================*/
/*----------------------------------
Data Types: Objects
----------------------------------*/
console.group("DataTypes: Objects");

let myObj = {
    str: "red",
    num: 1234,
    arr: [1, 2, 3],
    fn: () => {
        console.log("This is a function assinged to an object");
    },
};

myObj.fn();

// Everything is an object
let myArr = ["up", "down", 23];

console.log(myArr);

if (myArr.length > 2) {
    console.log("Array has more than 2 elements");
}

myArr.sayWhat = "Say Who?";

console.log(myArr);

console.groupEnd();
