document.getElementById("clickBtn").addEventListener('click', ageQuery);

let previousQueries = [];
previousQueries = JSON.parse(localStorage.getItem("previous"));
if ( previousQueries == null) {
    previousQueries = [];
}
 
async function ageQuery(){
   
   try { 

    if ( previousQueries == null) {
        previousQueries = [];
    }
    let whatName = document.getElementById("searchedName").value;
    let whatCountry = document.getElementById("country").selectedIndex;
    let countryId = document.getElementById("country").querySelectorAll("option")[whatCountry];
    let country = countryId.value;

    let ageQueried = await fetch(`https://api.agify.io?name=${whatName}&country_id=${country}`);
    let ageQueriedText = await ageQueried.json();

    previousQueries.push(ageQueriedText);

    localStorage.setItem("previous", JSON.stringify(previousQueries));

    let element = document.createElement("div");
    element.innerHTML = `name : ${ageQueriedText.name} <br/>
    age : ${ageQueriedText.age} <br/>
    country : ${ageQueriedText.country_id}`;
    document.body.appendChild(element);

} catch (e) {
}

}

function displayOldQueries(){
    for (let elem of previousQueries){
        let element = document.createElement("div");
        element.innerHTML = `name : ${elem.name} <br/>
        age : ${elem.age} <br/>
        country : ${elem.country_id}`;
        document.body.appendChild(element);
    }
}

displayOldQueries();