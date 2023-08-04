// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");

function updateCounter(){
    time++;
    counterElement.textContent = time;
}

setInterval(updateCounter, 1000);

//Chat GPT explination
//the updateCounterfunction uses the variables time++ to add on to the value of 0
//counterElement.textContent allows me to assign a new value allowing for the 
//update every time the function is called