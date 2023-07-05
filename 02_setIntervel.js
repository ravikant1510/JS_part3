// setInterval

console.log("script start");

setInterval(()=>{
    console.log(Math.random);
},1000);

console.log("script end"); 


// ab jo likh exapmle hai uski css html file nhi hai 
// just js code hai, project yh tha ki 1 sec ke intervel pr background color 
// change hota rhega and stop vala button press krne pr background change hona bnd ho jayega and button ka text jo abhi current rgb value hai vo ho jayegi

const body = document.body();
const intervelId = setInterval(()=>{
    // random [0,1) aise value dega to 126 se se multiply kr ke floor lene se
    // 0 to 125 tk values mil jayegi
    const red = Math.floor(Math.random()*126);
    const green = Math.floor(Math.random()*126);
    const blue = Math.floor(Math.random()*126);
    const rgb = `rgb(${red},${green},${blue})`;
    body.style.background = rgb;
},1000);

const button = document.querySelector("button");
button.addEventListener("click",()=>{
    // clearing interval
    clearInterval(intervelId);
    button.textContent = body.style.background;
});

console.log(intervelId);