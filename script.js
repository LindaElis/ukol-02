const pocetTriciek= Number (prompt("Zadajte počet triciek, ktoré chcete objednat: "))

if (pocetTriciek <= 49) { document.body.innerHTML += "Pri pocte triciek " + pocetTriciek + " je cena: "+ pocetTriciek * 300 + " Kč"}  
    else if (pocetTriciek <= 199) { document.body.innerHTML += "Pri pocte triciek " + pocetTriciek + " je cena: "+ pocetTriciek * 250 + " Kč"}   
    else if (pocetTriciek <= 499) { document.body.innerHTML += "Pri pocte triciek " + pocetTriciek + " je cena: "+ pocetTriciek * 200 + " Kč" }   
    else if (pocetTriciek <= 999) { document.body.innerHTML += "Pri pocte triciek " + pocetTriciek + " je cena: "+ pocetTriciek * 150 + " Kč"}   
    else if (pocetTriciek >= 1000) { document.body.innerHTML += "Pri pocte triciek " + pocetTriciek + " je cena: "+ pocetTriciek * 120 + " Kč"}