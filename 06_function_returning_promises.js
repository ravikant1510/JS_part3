// function returning promise
function ricePromise() {
    const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
    return new Promise((resolve, reject)=>{
        if(bucket.includes("vegetables",) && bucket.includes("salt") && bucket.includes("rice")){
            resolve({value : "friedrice"});
        }
        else{
            reject("could not do it");
        }
    })
}

// ricePromise ke aage () lga hua hai...mtlb phle function call ho rha hai
ricePromise().then(
    (myfriedRice)=>{
        console.log("lets eat ", myfriedRice);
    }).catch(
        (error)=>{
            console.log("error");
        }
    )