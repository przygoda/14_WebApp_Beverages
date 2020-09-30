
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite :: 
	Check Daten :: 
    Btn. Trigger :: check!
    Business-Logic (Alter --> Getränk) :: check!
    Bild austauschen :: check!
*/

// Trigger-Btn.
let btn = document.getElementById("trigBtn");
btn.addEventListener("click",actOnClick);

// Event-Dispatcher :: click
function actOnClick() {
    controller();
}


//Modul: Ablaufsteuerung (controller) --> Test:
//controller();
function controller() {

    // actions

    let bevStr    = checkAge(3);
    let loadedImg = updateImg(bevStr);

    // monitoring
    ausgabe("Bild: " + loadedImg + gui.img.ext);

}

//Modul: Business-Logic --> Test:
/* ausgabe(checkAge(2));
ausgabe(checkAge(6));
ausgabe(checkAge(17));
ausgabe(checkAge(20)); */
function checkAge(age) {
    switch (true) {
        case (age >= data.milk.lower) && (age <= data.milk.upper):
            return data.milk.bev;
        case (age >= data.juice.lower) && (age <= data.juice.upper):
            return data.juice.bev;
        case (age >= data.cola.lower) && (age <= data.cola.upper):
            return data.cola.bev;
            default:
            return data.wine.bev;   
    } 
}

//Modul: Bild austauschen (View)--> Test:
//ausgabe(updateImg("milch"));
function updateImg(imgName) {
   let img = document.getElementById("bevImg");
   img.src = gui.img.path + imgName + gui.img.ext;
   return imgName;
}

//Modul: Konsolenausgabe --> Test:
//ausgabe("test");
function ausgabe(outputStr) {
    console.log(outputStr);
}