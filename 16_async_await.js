// .then hta kr krne ka dusra syntext;

const URL = "https://jsonplaceholder.typicode.com/posts";

// async function getPosts(){
    // aise normal function ke bahr async likh dene se ab jab bhi
    // yh function call hoga yh promise return krega
// }

// fetch(URL)
//     .then(response =>{
//         return response.json();
//     })
//     .then(data=>{
//         console.log(data);
//     })

async function getPosts(){
    const response = await fetch(URL); // yh wait krega jab tak yh resolve na ho jaye
    console.log(response);// vhi object hoga
    const data =  await response.json();// yh wapis wait krega jab tak yh resolve na ho jaye
    console.log(data);//ab data print ho rha hai
    
    // ab actual main data return nhi hua, yh promise return hua hai
    return data;
}

getPosts()
    .then(myData=>{
        console.log(myData);
    })
    .catch(error=>{
        console.log(error);
    })

    // vhi vapis sirf network error pr catch chlega to error handling krni hagi