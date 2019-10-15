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
        prijsper = 1.90;
        hoeveelheidbestel()
    }
    else if(welke == "bier")
    {
        keuze = "bier";
        prijsper = 3.25;
        hoeveelheidbestel()
    }
    else if(welke == "wijn")
    {
        keuze = "wijn";
        prijsper = 4.10;
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
        prijssubtotaal = prijsper*aantal;

        prijssubtotaal = prijssubtotaal.toFixed(2);

        document.write(aantal + " " + keuze + " € " + prijssubtotaal + "<br>") 
        
        prijssubtotaal = parseFloat(prijssubtotaal);

        prijstotaal = prijstotaal + prijssubtotaal;
        bestel()
}
function hoeveelheidB()
{
    aantalB = prompt("Hoeveel " + keuze + " wilt u toevoegen aan uw bestelling (8 of 16)?\n(voer \"a\" in om te annuleren")
        
        
    if(aantalB == 8)
    {
        prijsper = 6
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
        prijsper = 10.5
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
    prijstotaal = prijstotaal.toFixed(2);
    document.write("<br>" + "Totaal:\n" + "€ " + prijstotaal)
}
