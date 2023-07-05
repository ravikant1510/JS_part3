// XHR => XML HTTP request
const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// xhr rk object hai jisme bhut sari properties hai
// console.log(xhr);
// json file main dekho...normal main kry main double "" nhi lgane pdte hai
// and json main methods nhi ho skte hai

// step 1:
xhr.open("GET", URL); 

xhr.onreadystatechange = function(){
    // console.log(xhr);
    // xhr main this.readyState hai jo 0,1,2,3,4 tk jati hai
    // jab data fetch ho gya ho to 4 ho jati hai
    if(xhr.readyState === 4){
        console.log(xhr);
        // ab xhr object dekte ho to usme data aa chuka hai
        // console.log(xhr.response);
        const response = xhr.response;
        const data =  JSON.parse(response); 
        // response ka type string hai and yh ek JSON hai.
        // parse isko object main change kr degi
    }
}

// yh uppar vala onreadystatechange hr baar chal rha tha jab state 0 se 1 se 2 aise 
// change ho rhi thi. but hume pta hai ki ready state 4 jab pura load ho jane pr hi hoti hai so uske liye onload ek property hai jo pura load hone pr hi chalti hai yane ki ready state 4 hone pr hi

xhr.onload = function(){
    console.log(xhr);
    const response = xhr.response;
    const data =  JSON.parse(response);
}

xhr.send()

// HTTP status code
// 1xx informational response – the request was received, continuing process
// 2xx successful – the request was successfully received, understood, and accepted
// 3xx redirection – further action needs to be taken in order to complete the request
// 4xx client error – the request contains bad syntax or cannot be fulfilled
// 5xx server error – the server failed to fulfil an apparently valid request


// Value	State	            Description
// 0	    UNSENT	            Client has been created. open() not called yet.
// 1	    OPENED	            open() has been called.
// 2	    HEADERS_RECEIVED	send() has been called, and headers and status are available.    
// 3	    LOADING	            Downloading; responseText holds partial data.
// 4	    DONE	            The operation is complete.