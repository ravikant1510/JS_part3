const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();
xhr.open("GET", URL); 

// this is doing like ki phle ek data aane do fir usme se step aage ke url 
// pr request bhejo
xhr.onload = function(){
    if(xhr.status >= 200 && xhr.status <300){
        const data = JSON.parse(xhr.response);
        console.log(data);
        const id = data[3].id;
        const xhr2= new XMLHttpRequest();
        const URL2 = `${URL}/${id}`;
        console.log(URL2);
        xhr2.open("GET", URL2);
        xhr2.onload = ()=>{
            const data2= JSON.parse(xhr2.response);
            console.log(data2);
        }
        xhr2.send();
    }
}

// for network related error
xhr.onerror = ()=>{
    console.log("network error");
}

xhr.send()