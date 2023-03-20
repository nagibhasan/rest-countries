const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountris(data))
}

const displayCountris = countries =>{

}

loadCountries();