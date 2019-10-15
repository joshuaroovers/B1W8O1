prijstotaal = 0;
bestel()

function bestel(){
    welke = prompt("Welke bestelling wilt u toevoegen?\n(fris, bier, wijn)\n(\"stop\" voor de rekening)")    
    welke = welke.toLowerCase();
    if(welke == "stop"){
        
        stop()
    }
    else if(welke == "fris"){
        
        keuze = "fris";
        prijsper = 1.90;
        hoeveelheidbestel()
    }
    else if(welke == "bier"){
        
        keuze = "bier";
        prijsper = 3.25;
        hoeveelheidbestel()
    }
    else if(welke == "wijn"){
        
        keuze = "wijn";
        prijsper = 4.10;
        hoeveelheidbestel()
    }
    else{
        
        alert("Invalide input");
        bestel()
    }
}

function hoeveelheidbestel(){
    aantal = prompt("Hoeveel " + keuze + " wilt u toevoegen aan uw bestelling?\n(voer \"a\" in om te annuleren")
    if(aantal == "a" || aantal == "A")
    {
        alert("Geanuleerd")
        bestel()
    }
    else if(isNaN(aantal)){
        alert("U dient een getal in te voeren")
        bestel()
    }
    else if(aantal < 1){
        alert("minimum van 1 vereist")
        bestel()
    }
    else{
        prijssubtotaal = prijsper*aantal;
        prijssubtotaal = prijssubtotaal.toFixed(2);
        document.write(aantal + " " + keuze + " € " + prijssubtotaal + "<br>") 
        prijssubtotaal = parseFloat(prijssubtotaal);
        prijstotaal = prijstotaal + prijssubtotaal;
        bestel()
    }
}

function stop(){
    prijstotaal = prijstotaal.toFixed(2);
    document.write("<br>" + "Totaal:\n" + "€ " + prijstotaal)
}
