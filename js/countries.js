const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountris(data))
}

const displayCountris = countries =>{
    const CountriesHTML = countries.map(country => getCountryHTML(country));
}

const getCountryHTML = country =>{
    return `
        <div>
            <h2>${country.name.common}</h2>
        </div> 
    `
}

loadCountries();