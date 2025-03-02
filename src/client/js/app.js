const fetchData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export async function handleSubmit(event) {
  document.getElementById('travel-form').addEventListener('submit', handleSubmit);

  event.preventDefault();
  const destination = document.getElementById('destination').value;

  const geonamesUrl = `http://api.geonames.org/searchJSON?q=${destination}&maxRows=1&username=shadowenO4`;
  const weatherbitUrl = `https://api.weatherbit.io/v2.0/current?city=${destination}&key=467725c69eb744ceafa81c00b8f0a55c`;
  const pixabayUrl = `https://pixabay.com/api/?q=${destination}&key=49042350-06ebdbdfbfdd05f84191284e8`;
  const restCountriesUrl = `https://restcountries.com/v3.1/name/${destination}`;

  const [geonamesData, weatherData, pixabayData, countryData] = await Promise.all([
    fetchData(geonamesUrl),
    fetchData(weatherbitUrl),
    fetchData(pixabayUrl),
    fetchData(restCountriesUrl),
  ]);

  console.log('Geonames:', geonamesData);
  console.log('Weatherbit:', weatherData);
  console.log('Pixabay:', pixabayData);
  console.log('Country Data:', countryData);

  // Save trip data to Local Storage
  const tripData = {
    destination,
    geonamesData,
    weatherData,
    pixabayData,
    countryData,
  };
  localStorage.setItem('tripData', JSON.stringify(tripData));
}
