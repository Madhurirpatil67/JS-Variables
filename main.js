/*
local variables -access within the scope
global variables- global access within entire file
keywords-let,var,const
In Global & Local scope let&const can not redeclare but var can
let and const variables can not access outside the scope and before initialization
*/

//var global
console.log(num);//undefined ,can access before initialization 
var num=10.5;
var num;//we can redeclare var variable
console.log(num);//10.5

//var local
for(var i=1;i<5;i++)
{
    var j; 
    var j; //redeclare
    //Here we can access value of i
}
console.log(i); // 5 can access outside scope


//let global
//console.log(str); can not access before initialization
let str="hello";
//let str; can not redeclare
console.log(str);

//let local
for(let i=1;i<5;i++)
{
    // let j;
    //let j;//can't
    //Here we can access value of i
}
//console.log(i); can not access outside scope

//const global
//console.log(pi);can not access before initialization
const pi=3.14;
//const pi; can not redeclare
console.log(pi);

//const local
for(const j=1;i<5;i++)
{
    //const j; can not redeclare
    //Here we can access value of i
}
//console.log(j); //can not access outside scope


