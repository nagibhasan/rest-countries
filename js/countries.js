const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountris(data))
}

const displayCountris = countries =>{
    const CountriesHTML = countries.map(country => getCountryHTML(country));
    const container = document.getElementById('countries');
    container.innerHTML = CountriesHTML.join(' ');
}

const getCountryHTML = country =>{
    return `
        <div class"country">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}">
        </div> 
    `
}

loadCountries();