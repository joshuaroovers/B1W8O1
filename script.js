const prijsfris = 1.90;
const prijsbier = 3.25;
const prijswijn = 4.10;

const prijsB8 = 6;
const prijsB16 = 10.5;

totaalbedragfris = 0;
totaalbedragbier = 0;
totaalbedragwijn = 0;

totaalbedragB8 = 0;
totaalbedragB16 = 0;

var totaalfris = 0;
var totaalbier = 0;
var totaalwijn = 0;

var totaalB8 = 0;
var totaalB16 = 0;

prijstotaal = 0;

bestel()

function bestel(){

    welke = prompt("Welke bestelling wilt u toevoegen?\n(fris, bier, wijn, snack)\n(\"stop\" voor de rekening)")    
    welke = welke.toLowerCase();

    if(welke == "stop")
    {        
        rekening()
    }
    else if(welke == "fris")
    {        
        keuze = "fris";
        hoeveelheidbestel()
    }
    else if(welke == "bier")
    {
        keuze = "bier";
        hoeveelheidbestel()
    }
    else if(welke == "wijn")
    {
        keuze = "wijn";
        hoeveelheidbestel()
    }
    else if(welke == "snack")
    {
        keuze = "bitterballen";
        hoeveelheidB()
    }
    else
    {
        alert("U heeft een ongeldige invoer gedaan.");
        bestel()
    }
}

function hoeveelheidbestel()
{   
    aantal = prompt("Hoeveel " + keuze + " wilt u toevoegen aan uw bestelling?\n(voer \"a\" in om te annuleren")
    
    if(aantal == "a" || aantal == "A")
    {
        alert("Geanuleerd")
        bestel()
    }
    else if(isNaN(aantal))
    {
        alert("U dient een getal in te voeren")
        bestel()
    }
    else if(aantal < 1)
    {
        alert("minimum van 1 vereist")
        bestel()
    }
    else
    {
        calc()
    }
}
function calc()
{
    if(keuze == "fris")
    {
        totaalfris === totaalfris + aantal;
        totaalbedragfris = totaalbedragfris + aantal*prijsfris
        bestel();
    }
    else if(keuze == "bier")
    {
        totaalbier = totaalbier + aantal;
        totaalbedragbier = totaalbedragbier + aantal*prijsbier
        bestel();
    }
    else if(keuze == "wijn")
    {
        totaalwijn = totaalwijn + aantal;
        totaalbedragwijn = totaalbedragwijn + aantal*prijswijn
        bestel();
    }
    else if(keuze == "bitterbalschaal 8")
    {
        totaalB8 = totaalB8 + aantal;
        totaalbedragB8 = totaalbedragB8 + aantal*prijsB8
        bestel();
    }
    else if(keuze == "bitterbalschaal 16")
    {
        totaalB16 = totaalB16 + aantal;
        totaalbedragB16 = totaalbedragB16 + aantal*prijsB16
        bestel();
    }

}

function hoeveelheidB()
{
    aantalB = prompt("Hoeveel " + keuze + " wilt u toevoegen aan uw bestelling (8 of 16)?\n(voer \"a\" in om te annuleren")
        
        
    if(aantalB == 8)
    {
        prijsper = prijsB8
        aantal = prompt("Hoeveel bitterbalschalen van " + aantalB + " stuks wilt u bestellen?")
        if (aantal < 1)
        {
             alert("minimum van 1 vereist")
             bestel()
        }
        else if(isNaN(aantal))
        {
            alert("U dient een getal in te voeren")
            bestel()
        }
        else
        {
            keuze = "bitterbalschaal 8"
            calc()
        }
    }
    else if(aantalB == 16)
    {
        prijsper = prijsB16
        aantal = prompt("Hoeveel bitterbalschalen van " + aantalB + " stuks wilt u bestellen?")
        if (aantal < 1)
        {
            alert("minimum van 1 vereist")
            bestel()
        }
        else if(isNaN(aantal))
        {
            alert("U dient een getal in te voeren")
            bestel()
        }
        else
        {
            keuze = "bitterbalschaal 16"
            calc()
        }
    }
    else if(aantalB == "a" || aantalB == "A")
    {
        alert("Geanuleerd")
        bestel()
    }
    else if(isNaN(aantalB))
    {
        alert("U dient een getal in te voeren")
        bestel()
    }
    else if(aantalB != 8 || aantalB != 16 )
    {
        alert("U kunt alleen een keuze maken tussen 8 en 16.")
        bestel()
    }
        
}

function rekening()
{
    totaalbedragfris = totaalbedragfris.toFixed(2);
    totaalbedragbier = totaalbedragbier.toFixed(2);
    totaalbedragwijn = totaalbedragwijn.toFixed(2);
    totaalbedragB8 = totaalbedragB8.toFixed(2);
    totaalbedragB16 = totaalbedragB16.toFixed(2);

    document.write(totaalfris + "fris" + " € " + totaalbedragfris + "<br>")
    document.write(totaalbier + "bier" +   " € " + totaalbedragbier + "<br>")
    document.write(totaalwijn + "wijn" +  " € " + totaalbedragwijn + "<br>")
    document.write(totaalB8 + "bitterbalschaal 8" + " € " + totaalbedragB8 + "<br>")
    document.write(totaalB16 + "bitterbalschaal 16" + " € " + totaalbedragB16 + "<br>")
    prijstotaal = totaalbedragfris + totaalbedragbier + totaalbedragwijn + totaalbedragB8 + totaalbedragB16;
    prijstotaal = prijstotaal.toFixed(2);
    document.write("<br>" + "Totaal:\n" + "€ " + prijstotaal)
}
