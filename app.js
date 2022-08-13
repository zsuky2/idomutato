//Eltároljuk változókba azokat az elemeket, amelyeken műveleteket szeretnék végrehajtani
var time = document.getElementById("time");
    greet = document.getElementById("greet");
    todo = document.getElementById("todo");


//Az idő dinamikus beállítása az oldalon
function showTime(){

    //Óra-perc-másodperc eltárolása változóba
    var today = new Date();
        hour = today.getHours();         //óra eltárolása
        min = today.getMinutes();       //perc eltárolása
        sec = today.getSeconds();      //másodperc eltárolása

    
    //Idő megjelenítése az erre felvett elemeben (time)/böngészőben
    time.innerHTML = addZero(hour)+"<span>:</span>"+addZero(min)+"<span>:</span>"+addZero(sec);

    //Lefuttatjuk mindegy másodpercben a showTime függvényünket -> minden másodpercben látni fogjuk az új időt megjelenítve a böngészőben
    setTimeout(showTime, 1000);
    
}

//Hozzunk létre egy függvényt, amely hozzáad az óra,perc,másodperc elé egy 0-át, ha az adott idő kisebb mint 10
function addZero(number){

    //Ha a függvény paraméternéek értéke(number) kisebb mint 10, akkor rakjunk a szám elé egy 0-át, ha nagyxobb mnit 10 akkor nem rakunk elé semmit
    return(parseInt(number) < 10 ? '0' : '')+number;
}


//Hozzunk létre egy függvényt, amely adott napszakhoz fogja állítani a weboldal háttérképét és betűszínét és a köszöntést
function setBgGreet(){

    //Eltároljuk az órát egy változóba
    var today = new Date();
        hour = today.getHours();

    //Megnézzük, hogy az hour változóba eltárolt érték kisebb-e mint 12 -> délelőtt/reggel van
    if(hour < 12){

        //Beállítjuk a napszakhoz tartozó köszöntést
        greet.innerText = "Jó reggelt, ";
        //Beállítjuk a napszakhoz tartozó háttérképet és betűszínt(ha szükséges)
        document.body.style.backgroundImage = "url('img/morning.jpg')";
    }
    //Megnézzük, hogy az hour változóba eltárolt érték kisebb-e mint 18 -> délután van
    else if(hour < 18){

        //Beállítjuk a napszakhoz tartozó köszöntést
        greet.innerText = "Kellemes délutánt, ";
        //Beállítjuk a napszakhoz tartozó háttérképet és betűszínt(ha szükséges)
        document.body.style.backgroundImage = "url('img/afternoon.jpg')";
        document.body.style.color = "white";
        todo.style.color = "white";
        todo.style.borderColor = "white";

    }
    //Megnézzük, hogy az hour változóba eltárolt érték nagyobb-e mint 18 -> este van
    else{

         //Beállítjuk a napszakhoz tartozó köszöntést
         greet.innerText = "Szép esetét, ";
         //Beállítjuk a napszakhoz tartozó háttérképet és betűszínt(ha szükséges)
         document.body.style.backgroundImage = "url('img/night.jpg')";
         document.body.style.color = "white";
         todo.style.color = "white";
         todo.style.borderColor = "white";
 

    }

    //Minden órában futtassa le ezt a függvényt -> ezzel tudjuk ellenőrizni, hogy adott óra kisebb-e mint a feltételben megadott érték
    setTimeout(setBgGreet, 3600000);
}   

showTime();
setBgGreet();



