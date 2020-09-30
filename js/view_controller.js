
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite :: 
	Check Daten :: 
    Btn. Trigger :: 
    Business-Logic (Alter --> Getränk) :: 
    Bild austauschen :: check!
*/

//Modul: Ablaufsteuerung (controller) --> Test:
//controller();
function controller() {

    // actions

    let bevStr    = checkAge();
    let loadedImg = updateImg(bevStr);

    // monitoring
    ausgabe("Bild: " + loadedImg + gui.img.ext);

}

//Modul: Business-Logic --> Test:
ausgabe(checkAge(2));
ausgabe(checkAge(6));
ausgabe(checkAge(17));
ausgabe(checkAge(20));
function checkAge(age) {
    switch (true) {
        case (age >= 0) && (age <= 5):
            return "milch";
        case (age >= 6) && (age <= 12):
            return "saft";
        case (age >= 13) && (age <= 17):
            return "cola";
            default:
            return "wein";   
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