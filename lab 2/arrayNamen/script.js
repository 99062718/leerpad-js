namen = [];
goedeFunctieNaam();

function goedeFunctieNaam(){
    input = prompt("Hoeveel namen wilt u in de array stoppen? (minimaal 3)");

    if (prompt < 3) {return goedeFunctieNaam();}

    for (x = 0; x < input; x++){
        naam = prompt("voer een naam in");
        namen.push(naam);
    }

    document.getElementById("namen").innerHTML = namen;
    document.getElementById("reversed").innerHTML = namen.reverse();
}