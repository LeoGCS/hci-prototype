
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
var filterModule = document.getElementById("module") ;

var filterAnzahl = document.getElementById("maxAnzahl") ;

var filter = [filterModule, filterAnzahl] ;

var result = anzeigen.filter(function (ele) {
    return ((ele["name"] == document.getElementById(name) || ele["name"] == null) &&
        ele["module"] == filterModule &&
        ele["maxAnzahl"] >= filterAnzahl)
})

console.log(result)






