const search = async ()=>{

    if (country.value !== ""){
        let countryName = country.value
    

    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)

    console.log(response)

    response.json().then((data)=>{
        let result = data[0]

        let cName = result.name.common
        let capitalName = result.capital[0]
        let population = result.population
        let timeZone = result.timezones[0]
        let continent  = result.continents[0]
        let flagImg = result.flags.png
      

        let nativeLang = []

        let language = result.languages

        for (var lang in language){
            nativeLang.push(language[lang])
           
        }
       

        let nativeCurrency = []
        let currencySymbol = []

        let currency = result.currencies

        for (var curr in currency){
            
            nativeCurrency.push(currency[curr].name)
            currencySymbol.push(currency[curr].symbol)
            console.log(currencySymbol);
            console.log(nativeCurrency);
        }

        let countryMap = result.maps.googleMaps
        

        countryView.innerHTML = `<div class="card" style="width: 18rem;">
            <img src="${flagImg}" class="card-img-top" alt="...">
            <div class="card-body">
              <h4 class="card-title">${cName}</h4>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Capital: ${capitalName}</li>
              <li class="list-group-item">Population: ${population}</li>
              <li class="list-group-item">Time Zone: ${timeZone}</li>
              <li class="list-group-item">Continent: ${continent}</li>
              <li class="list-group-item">Languages: ${nativeLang}</li>
              <li class="list-group-item">Currency: ${nativeCurrency}</li>
              <li class="list-group-item">Currency Symbol: ${currencySymbol}</li>
            </ul>
            <div class="card-body">
              <a href="${countryMap}" class="card-link">Map</a>
             
            </div>
          </div>`



        
    })
}else{
    alert("Please Enter a Country Name")
}
    }
