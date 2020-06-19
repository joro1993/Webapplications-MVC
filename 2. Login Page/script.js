// const=constant, dvs går inte att förändra på
// Jag antar att detta är de som emnas med hårdkodade?
const userName = "test";
const passWord = "1234";

//Skapar var variabler
//Hämtar element med ID från html.
var user = document.getElementById("användarnamn");
var pass = document.getElementById("lösenord");
var loggaIn = document.getElementById("loggainknapp");


loggaIn.onclick = function(){
    // Kollar så att användarnamn och lösenord stämmer och skapar en ny "sida" ifall det stämmer.
var userN = document.getElementById("användarnamn").value;
var passW = document.getElementById("lösenord").value;

if(userN === userName && passW === passWord){
            
    localStorage.setItem("inloggad", "true");
    location.reload(); // trycker man på logga in så "laddar den om"
                      // Men i detta fallet så loggar man in tack vare else-statementet
}


else{
        // tar bort element med hjälp av style.display och har på "none"
      loggaIn.style.display = "none"; // Detta tar bort logga in knappen
      user.style.display = "none";   // Användarnamn formuläret och 
      pass.style.display = "none"; // lösenord formuläret


      var fel = document.createElement("p"); // skapar en paragraph med variabel "fel" som säger att man skrivit fel
      fel.innerHTML = "Du har skrivit fel lösenord eller användare :("; //Detta kommer visas när man skriver fel
      document.body.appendChild(fel);

      var testaIgen = document.createElement("button"); // Skapar en testa igen-knapp
      testaIgen.innerHTML = "Testa igen :)"; // Detta kommer visas på testa igen-knappen
      document.body.appendChild(testaIgen);

      testaIgen.onclick = function(){ // lägger till en funktion i testa igen knappen
      location.reload();            // detta kommer ladda om sidan så man kommer till "startsidan" när man trycker på testa igen
}
}
};


loggain();
function loggain(){
var inloggad = localStorage.getItem("inloggad")
if(inloggad === "true"){


    //tar bort element med hjälp av style.display och har på "none"
    loggaIn.style.display = "none"; // Detta tar bort logga in knappen
    user.style.display = "none";    // Användarformuläret och
    pass.style.display = "none";    // lösenord formuläret
    var rätt = document.createElement("p");
    rätt.innerHTML = "Välkommen in :D "; // testen som visas när man loggar in
    document.body.appendChild(rätt);

    var loggaUt = document.createElement("button"); // Skapar en knapp med variabel loggaUt
    loggaUt.innerHTML = "logga ut"; // detta kommer lägga till texten "logga ut" på knappen
    document.body.appendChild(loggaUt);
            

    // Lägger till en funktion till variablen loggaUt som är kopplat till logga ut knappen
    // funktionen är att rensa och ladda om localstorage.
    loggaUt.onclick = function(){
    localStorage.clear(); // rensar local storage
    location.reload(); // laddar om sidan till logga in-sidan igen.
}    
}
    
};

function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = " E.M";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = " F.M";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + session;
    document.getElementById("clockDisplay").innerText = time;
    document.getElementById("clockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();
