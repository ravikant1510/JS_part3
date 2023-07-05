// promise resolve
// promise chaining

const myPromise = Promise.resolve(5);
myPromise.then((value)=>{console.log(value)}); // 5 print ho jayega

// uppar vale ko aise bhi likh skte hai
Promise.resolve(5).then((value)=>{console.log(value)});

// then() , then method hamesha promise return krta hai
// isse fayda hai ki hum chain create kr skte hai

function chainPromise(){
    return new Promise((resolve,reject)=>{
        resolve("foo");
    })
}

chainPromise()
    .then(value =>{
        console.log(value);
        value+="bar";
        // yha jo return ho rha hai vo promise hai
        return value;
        // internally this is equivalent to 
        // return Promise.resolve(value);
    })
    .then(value =>{
        console.log(value);//foobar
    })

    // to aise chaining ho gyi



// now in case we not write return in first so by default undefined will be returned 
// that is in form of promise only
chainPromise()
    .then(value =>{
        console.log(value);
        value+="bar";
        // internally it's like
        // Promise.resolve(undefined);
    })
    .then(value =>{
        console.log(value);//undefined
    })
