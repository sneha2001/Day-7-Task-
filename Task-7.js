// Fetch data from the API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // a): Get all the countries from Asia continent / region using Filter function
    const asiaCountries = data.filter(country => country.region.includes('Asia'));
    console.log('Countries in Asia:', asiaCountries);

    // b): Get all the countries with a population of less than 2 lakhs using Filter function
    const lowPopulationCountries = data.filter(country => country.population < 200000);
    console.log('Countries with population less than 2 lakhs:', lowPopulationCountries);

    // c): Print name, capital, flag using forEach function
    data.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags[0]}`);
    });

    // d): Print the total population of countries using reduce function
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log('Total population of countries:', totalPopulation);

    // e): Print the country that uses US dollars as currency
    const usDollarCountries = data.filter(country => country.currencies && country.currencies.USD);
    console.log('Countries using US dollars:', usDollarCountries);
  })
  .catch(error => console.error('Error fetching data:', error));
