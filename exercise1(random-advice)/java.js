// Your challenge is to build out this advice generator app using the [Advice Slip API](https://api.adviceslip.com) and get it looking as close to the design as possible.

// the user of app should be able to:

// - View the optimal layout for the app depending on their device's screen size
// - See hover states for all interactive elements on the page
// - Generate a new piece of advice by clicking the dice icon
const url="https://api.adviceslip.com/advice";
const triangleEl=document.querySelector('.triangle');
const bodyEl=document.querySelector('body');
triangleEl.style.border="1px solid";
const idEl=document.querySelector(".id");
const paraEl=document.querySelector(".para");

async function build() {
    const da=await fetch(url);
    const data=await da.json();
    idEl.textContent=`ADVICE # ${data.slip.id}`;
    paraEl.textContent=data.slip.advice;
    
}
build();
const buttonEL=document.querySelector('button');
buttonEL.addEventListener('click', build)