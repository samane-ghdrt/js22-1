//1. The URL where our planet data is located is: "https://handlers.education.launchcode.org/static/planets.json".
//2. Add the code to fetch this URL
//   -The data you receive as a response should be an array containing 6 objects
//3. show the first planet name and distance(first index of the array data)
//4. let's dynamically change which planet's info we're displaying each time the element with id "destination" is clicked. To do this:
//      a) Declare a counter variable, index that changes each time a click event takes place.
//      b) Use the value of index as the position in the planets array to use in the template literal.
//      c) Lastly, to ensure that the value of the index does not surpass the length of the planets array, implement a mechanism to control the maximum allowed value for the index

////////Answer///////////
const URL="https://handlers.education.launchcode.org/static/planets.json";
const buttonEl=document.querySelector("button");
const index=0;
let plan = [];
async function planets() {
   try {
    const DATA= await fetch(URL);
    const data1=await DATA.json();
    plan=data1;
    planet(plan[index]);
  
   } catch (error) {
    console.log(error); 
   }
    
}
buttonEl.addEventListener("click",()=>{
//   let index=index+1;
   console.log( planet(plan[index+1]));
    })
planets();
const divEl=document.querySelector('#destination');
function planet(element) {
    const nameEL=document.createElement("h4");
    const diameterEl=document.createElement("p"); 
    const starEl=document.createElement("p"); 
    const distanceEL=document.createElement("p");
    const imageEL=document.createElement("img");
    const moonsEl=document.createElement("p");

    nameEL.textContent=element.name;
    diameterEl.textContent=element.diameter;
    starEl.textContent=element.star;
    distanceEL.textContent=element.distance;
    imageEL.setAttribute("src",element.image)
    moonsEl.textContent=element.moons;

divEl.append(nameEL,diameterEl,starEl,distanceEL,imageEL,moonsEl);
imageEL.style.width="100px";
divEl.style.border="1px solid"
divEl.style.width="300px"
    
}
