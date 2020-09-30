
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite :: 
	Check Daten :: 
    Btn. Trigger :: 
    Business-Logic (Alter --> Getränk) :: 
    Bild austauschen :: 
*/


//Modul: Bild austauschen --> Test:
ausgabe(updateImg("milch"));
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