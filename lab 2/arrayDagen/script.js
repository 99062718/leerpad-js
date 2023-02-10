dagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"]

document.getElementById("alleDagen").innerHTML = dagen;

document.getElementById("werkDagen").innerHTML = dagen.slice(0, 5);

document.getElementById("weekendDagen").innerHTML = dagen.slice(5, 7);

document.getElementById("reversedDagen").innerHTML = dagen.reverse();

document.getElementById("werkReversedDagen").innerHTML = dagen.slice(2, 7);

document.getElementById("weekendReversedDagen").innerHTML = dagen.slice(0, 2);