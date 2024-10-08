/*===================================
||
|| Data Types: Numbers and Strings
||
===================================*/

/*----------------------------------
Data Types: Numbers
----------------------------------*/
console.group("DataTypes: Numbers");

const myNum1 = 234;
const myNum2 = 12;
console.log(myNum1 + myNum2);

console.groupEnd();

/*----------------------------------
Data Types: Strings
----------------------------------*/
console.group("DataTypes: Strings");

const myStr1 = "I went to the ";
const myStr2 = "park";
console.log(myStr1 + myStr2);

console.groupEnd();

/*----------------------------------
Data Types: Template Strings
----------------------------------*/
console.group("DataTypes: Template Strings");

const myTempStr = `
    multi-line items
    ${myNum1}
`;

console.log(myTempStr);

console.groupEnd();
