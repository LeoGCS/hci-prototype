
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

var result = null;

function filter(filterAnzahl, filterModule, filterName ) {
    console.log(filterName)
    console.log(filterAnzahl)
    console.log(filterModule)
    result = anzeigen.filter(function (ele) {
        if(filterName == ""){
            return (ele.module == filterModule &&
            ele.maxAnzahl <= filterAnzahl)
        }else{
            return (ele.name == filterName &&
            ele.module == filterModule &&
            ele.maxAnzahl <= filterAnzahl)
        }
    })
    console.log(result)
}

var anzeigenBlock = '';
var anzeige = null;

for (var i = 0; i < result.length; i++) {
    anzeige = result[i];
    anzeigenBlock += '<div>' + 'Name:' + anzeige.name + '</div>';
}

function print(anzeigenBlock) {
    document.getElementById('anzeigen').innerHTML = anzeigenBlock;
}

print(anzeigenBlock);



