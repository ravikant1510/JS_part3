// I want to resolve/ reject promise after 2 second

function setPromisValue(){

    return new Promise((resolve, reject)=>{
        const value = true;
        setTimeout(()=>{
            if(value){
                resolve();
            }
            else{
                reject();
            }
        },2000);
    })
}

setPromisValue()
    .then(()=>{console.log("resolved")})
    .catch(()=>{console.log("rejected")});
