// Promise -> promis basically aise value hai jo abhi pta nhi hai pr future main pta hogi
console.log("script start");
const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

// Promise ke andar vala function is Executer function (yh naam hai baki hai to yh callback function hi hai)
// now promise ko kisi variable main store kr skta hun ya function se return kr skta hun
// this produce of promise
const friedRicePromise = new Promise((resolve, reject) => {
  if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
    resolve({ value: "friedrice" });
  } else {
    reject("could not do it");
  }
});

// promise is like a object only...iske andar ek status hoti hai ek value hoti hai

// now how to consume 
// then -> as input callback function lega and iss function ke argument main vo value aa 
// jayegi jo ki mere Promise ke resolve hone pr aati hai aur usko koi bhi naam main le skte hai jaise myfriedRice main li hai 
// yha , dal kr dusra callback likh liya
friedRicePromise.then(
    // jab promise resolve hoga
    (myfriedRice) => {
    console.log("lets eat ", myfriedRice);
    }
    ,
    // jab promise reject hoga
    (error) => {
    console.log(error);
   }
);

// more clear way to do it 
friedRicePromise.then((myfriedRice) => {
      console.log("lets eat ", myfriedRice);
    }
).catch((error) => {
    console.log(error);
});

setTimeout(()=>{
    console.log("from setTime out");
},0);
// now promise bhi javaScript ka nhi browser ka feature hai, so 
// promise bhi asynchronous task hai, actually promise ko consume browser krta hai
// yh phle print ho jayega
console.log("after promise");

// ek callback queue hoti hai and ek microtask queue 
// promises jo comnsume ho rhe hai vo microtask queue main jate hai 
// now jo setTimeout hai vo callback queue main hai and GEC(globel execution context) free 
// ho chuka hai to callback queue and multitask queue main priority multitask queue ki jyada hogi 