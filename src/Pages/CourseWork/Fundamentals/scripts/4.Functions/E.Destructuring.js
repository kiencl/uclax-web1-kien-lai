/*===================================
||
|| Functions: Destructuring Objects as Arguments
||
===================================*/
console.group("Functions: Destructuring");

const readPerson = ({ first, last, email, colors }) => {
    console.log(`${first} ${last}, your email is ${email}`);
    console.log("Your favorite colors are: ");

    colors.forEach((color, idx) => {
        console.log(color);
    });
};

const person1 = {
    first: "Tom",
    last: "Hanks",
    email: "tom@me.com",
    colors: ["red", "green", "blue"],
};

const person2 = {
    first: "Pat",
    last: "Colemen",
    email: "pat@me.com",
    colors: ["yellow", "brown", "orange"],
};

readPerson(person1);
readPerson(person2);

console.groupEnd();
