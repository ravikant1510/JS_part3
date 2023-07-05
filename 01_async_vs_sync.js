// synchronous programming vs asynchronous programming

// javaScript is synchronous programming language with single thread

// console.log("start");

// setTimeout function ko as input leta hai,and second argument leta hai ki
// kitni der baad vo function call krna hai

// // settimeout browser provide kr rha javascript nhi
// setTimeout(()=>{
//     console.log("in set timeout");
// },1000);

// console.log("end");


// next example


// console.log("start");

// // yha bhle hi wait time 0 ms ho pr,
// // vo vaps execute hone ke liye callback queue main jayegi
// // fir callback stack main jayegi
// setTimeout(()=>{
//     console.log("in set timeout");
// },0);


// for(let i=0;i<=100;i++){
//     console.log("....");
// }

// console.log("end");

// setTimeout -> return main hume ek id deta hai and usi ka use krke cleartime out likha
// hai 
// next example of clear timeout
console.log("start");

const id = setTimeout(()=>{
    console.log("in set timeout");
},1000);


for(let i=0;i<=100;i++){
    console.log("....");
}

console.log("setTimeout id is" , id);
console.log("clearing id");
clearTimeout(id);

console.log("end");