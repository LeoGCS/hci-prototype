
var anzeigen = [
    {
        name: "Die Hochmotivierten",
        module: "Mensch-Computer-Interaktion",
        maxAnzahl: "5",
    },
    {
        name: "Copy Cats",
        module: "Analysis A",
        maxAnzahl: "4",
    },
    {
        name: "FizzBuzz",
        module: "Analysis B",
        maxAnzahl: "6",
    },
    {
        name: "Low effort",
        module: "Datenstrukturen und Algorithmen",
        maxAnzahl: "3",
    }
]

function filter(filterAnzahl, filterModule, filterName) {
    return anzeigen.filter(ele=>
        ele.module == filterModule && (filterAnzahl == "" || ele.maxAnzahl <= filterAnzahl) && (filterName == "" || filterName == ele.name)
    )
}

function print() {
    var anzeigenBlock = '';
    var url = new URL(window.location.href);
    var result = anzeigen
    if(url.search != ""){
        result = filter(url.searchParams.get('maxAnzahl'),
            url.searchParams.get('module'),
            url.searchParams.get('name'));
    }
    for (let anzeige of result) {
        anzeigenBlock += '<div>' + 'Name: ' + anzeige.name + '<br/> Modul:' + anzeige.module + '<br/> Max. Mitglieder Anzahl' + anzeige.maxAnzahl + '</div>';
    }
    document.getElementById('anzeigen').innerHTML = anzeigenBlock;
}




