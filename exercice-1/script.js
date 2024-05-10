async function getCountry (){
    
    try{
        let country = await fetch("tableau.json");
    let countryTxt = await country.json();

    let list = document.createElement("ul");

    for (elem of countryTxt){
        let listItem = document.createElement("li");
        let listItemTxt = document.createTextNode(`${elem.country}`);
        listItem.appendChild(listItemTxt);
        list.appendChild(listItem);
    }

    document.body.appendChild(list);
    } catch (e) {

    }
}

document.getElementById("clickBtn").addEventListener('click', getCountry);