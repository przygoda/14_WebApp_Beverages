
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite :: check!
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

function getInput() {
    let inputField = document.getElementsByName("eingabe")[0];
    let age = parseInt(inputField.value); 
    return age;
}

//Modul: Ablaufsteuerung (controller) --> Test:
//controller();
function controller() {
    // actions
    let ageNum    = getInput();
    let bevStr    = checkAge(ageNum);
    let loadedImg = updateImg(bevStr);

    // monitoring
    ausgabe("Getränk: " + bevStr);
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
        case (age >= data.wine.lower) && (age <= data.wine.upper):
            return data.wine.bev;
                default:
                return data.default.bev;   
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