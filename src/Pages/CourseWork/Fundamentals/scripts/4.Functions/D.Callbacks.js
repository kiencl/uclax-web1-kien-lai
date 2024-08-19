/*===================================
||
|| Functions: Call Backs (First Class Functions)
||
===================================*/

console.group("Functions: Call Backs");

const myConsumerFn = (fn) => {
    console.log("My Consumer Function");
    fn();
};

const myFnToPass = () => {
    console.log("Passing this function in");
};

myConsumerFn(myFnToPass);

myConsumerFn(() => {
    console.log("My Callback anonymous");
});

console.groupEnd();
