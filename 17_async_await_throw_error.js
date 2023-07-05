const URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts(){
    const response = await fetch(URL); 
    console.log(response);
    if(response.ok){
        const data =  await response.json();
        // console.log(data);
        return data;
    }
    else{
        throw new Error("something went wrong");
    }
}
// yh sab kaam asynchronous ho rhe hai
getPosts()
    .then(myData=>{
        console.log(myData);
    })
    .catch(error=>{
        console.log(error);
    })
