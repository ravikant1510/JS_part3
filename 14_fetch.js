const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch returns promise
fetch(URL)
    .then(response =>{
        // console.log(response);
        // console.log(typeof response); // object
        // response object main ek json() method hai jo promise return krta hai
        // console.log(response.json())//promise
        return response.json();
    })
    .then(data =>{
        console.log(data);
    })
    .catch(error=>{
        // bhut importent baat fetch sirf network error ke case main reject hota hai.
        // abhi upar vala url galat bhi kr de fir bhi then vala block hi chlega 
        // .catch vala nhi but difference yh hoga ke jo response object mil rha
        // hai use ek (ok) property hai, vo shi url ke case main true hai and 
        // galat url ke case main  false hai
        console.log("inside catch");
        console.log(error);
    })

// then main promise resolve hoke value aati hai and catch main reject hoke aati hai

