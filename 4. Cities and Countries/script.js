var text;
var sparaStad = []; // sparaStad är en array
var element;

var tempStad;
var hamtaLand;
var hamtaStad;
var lSIndex = "index";


/* var li1 = document.createElement("li");
Li1.id = "lander";
document.body.appendChild(li1);
var li2 = document.createElement("li");
Li2.id = "stader";
document.body.appendChild(li2);              // Funkar inte
                                             // note to self: testa skriva elementen direkt i html-filen
var div1 = document.createElement("div");
div1.id = "forumForLand";
document.body.appendChild(div1);
var div2 = document.createElement("div");
div2.id = "dataStad";
document.body.appendChild(div2);
document.div2.appendChild(kryssRuta); */



// hämtar id med getelementById från html-dokumentet
// användar const-variabler, som står för constant
const lander = document.getElementById("lander");
const stader = document.getElementById("stader");
const kryssRuta = document.getElementById("kryssRuta");

// Lägger till eventlistener med klick och elementclick, så man kan klicka på "elementet"
lander.addEventListener('click', elementClick);
stader.addEventListener('click', elementClick);

// Hämtar mer id med getelementById, divs.
const forumForStad = document.getElementById("div1");
const stadData = document.getElementById("div2");
const resultat = document.getElementById("div3");



// hämtar länder med fetch
fetch("land.json") 
    .then(response => {
    return response.json();
})
.then(data => {  // .then är ett promise som väntar tills de förra "laddat klart" så att säga. Så efter .fetch är klart så kommer .then in i bilden.
hamtaLand = data;
laggTillLand(hamtaLand); // läser in laggTillLand och lägger in hamtaland i funktionen

})
.catch(err => { // .catch är till för att fånga errors
 console.log(err);
})

function stad(element) {
fetch("stad.json")        
    .then(response => {  
    return response.json();
})
.then(data => {
hamtaStad = data; //hamtaStad likamed data som jag lägger in i laggtillstad
laggTillStad(hamtaStad, element) // läser in laggTillLand och lägger in hamtaStad och element i funktionen
})
        
.catch(err => {
console.log(err); // .catch är till för att fånga errors
})

}





        // skapar en function som ska lägga ut länderna
function laggTillLand() {
hamtaLand.forEach(function (countryData) { // foreach lägger till länderna för sig i en lista
text = `<li class="${countryData.id}">${countryData.countryname}</li>`;
lander.insertAdjacentHTML('afterbegin', text) // insertadjacenthtml lägger till text efter den börjat. 
                                             // vilket är countryID och namn och data
visaPlatser() // läser in visaPlatser
})
}
    // Skapar en funktion som ska lägga ut städer.
function laggTillStad(hamtaStad, element) {
let filter;
let check;
for (i = 0; i < hamtaLand.length; i++) { // for-loop med hamtaLand för att få fram länderna
    if (element.innerHTML === hamtaLand[i].countryname) {
    forumForStad.style.display = "none"; 
    stader.innerHTML = "";
    filter = hamtaStad.filter(function (data) {
return data.countryid == element.className;       // Filterar städerna med countryID
})

filter.forEach(function (filter) {
text = `<li>${filter.stadname}</li>`      // Lägger ut städerna på "stader"
stader.insertAdjacentHTML('afterbegin', text) // lägger till texten efter den börjat, 
                                             //vilket är stadname från json filen
})
}
}


for (i = 0; i < hamtaStad.length; i++) { // for-loop för att få ut städerna i en lista.
    if (element.innerHTML === hamtaStad[i].stadname) {
    tempStad = hamtaStad[i];                    // Kollar ifall städerna finns i array, vilket är sparaStad
    check = false;                             //
    if (sparaStad.length > 0) {               //            
                
        
check = sparaStad.some(function (sparaStad) {         
    return sparaStad.stadname === hamtaStad[i].stadname 
})
}


kryssRuta.checked = check;                 
forumForStad.style.display = "block";
stadData.innerHTML = tempStad.stadname + " " + tempStad.population;
return

}
}
}



function visaPlatser() {
var population;



    (localStorage.getItem(lSIndex) // sätter getItem på ISIndex för localstorage
    !== "" && localStorage.index !== "[]") 

{
    text = "Du har besökt: " + "<br><br>"
    sparaStad.forEach(function (sparaStad) {   //forEach lägger till elementen var för sig. Här lägger den till städerna.               
    text += sparaStad.stadname + " ";
})

 // Detta skriver ut vilka städer man besökt som är sparade i en array
population = sparaStad.reduce(function (total, sparaStad) { // array.reduce metoden reducerar arrayen till ett värde
return sparaStad.population + total; // totalt antal i befolkning
}, 0)
text += "<br>" + "Antal människor i städerna du besökt är " + population + "styckna!! Galet va?" // text som visas på sidan
resultat.innerHTML = text; // lägger till en text med innerHTML i resultat.

} 
    
}

function elementClick() {    // Skapar elementclick så man kan klicka på elementet
element = event.target;
stad(element)        // Detta ska ta reda på vad användaren klickar på 
visaPlatser() // läser in visaPlatser
}

function selectChkBox() {

if (kryssRuta.checked === true) { // kryssar man i kryssrutan så kommer tempStad sparas i en array
    sparaStad.push(tempStad) 
    sparaStorage() // läser in sparaStorage
    visaPlatser() // läser in visaPlatser

} 
else if (kryssRuta.checked === false) {
    for (i = 0; i < sparaStad.length; i++) {              
    if (sparaStad[i].stadname === tempStad.stadname) { // rätt stad tas bort från array när användaren 
        sparaStad.splice(i, 1)                         // tar bort kryss för checkbox
        sparaStorage() // läser in sparaStorage
        visaPlatser() // läser in visaPlatser

}
}

}

}


kollaStorage()
function kollaStorage() 
    {

        if (localStorage.getItem(lSIndex)) 
    
    {
        
        sparaStad = hamtaStorage()

    }
}

function hamtaStorage() {
return JSON.parse(localStorage.getItem(lSIndex));

}

 function sparaStorage() 
{
    
    localStorage.setItem(lSIndex, JSON.stringify(sparaStad)) //json stringify konverterar js objektet till en json string

} 

const rensaLS = document.getElementById("rensa"); // hämtar rensa-knappen med ID

rensaLS.addEventListener('click', rensaLocalStorage); // lägger till en eventlistener med click som är kopplad till "rensalocalstorage" funktionen.

function rensaLocalStorage() 
{

    localStorage.clear(); // rensar localstorage

    location.reload(); // laddar om sidan
    
}
