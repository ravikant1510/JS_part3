const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL,{
    method: 'POST',
    // data ko jason main convert kr rhe hai
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response =>{
        if(response.ok){
            return response.json();
        }
        else{
            throw new Error("something went wrong");
        }
    })
    .then(data =>{
        console.log(data);
    })
    .catch(error=>{
        console.log("inside catch");
        console.log(error);
    })

    // same isme bhi catch sirf network error ke case main chalta hai,
    // so use chlane ke liye throw krna hota hai