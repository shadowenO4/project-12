const API_KEYS = {
  geonames: 'shadowenO4',
  weatherbit: '467725c69eb744ceafa81c00b8f0a55c',
  pixabay: '49042350-06ebdbdfbfdd05f84191284e8'
};

const fetchData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export async function handleSubmit(event) {
  event.preventDefault();
  const destination = document.getElementById('destination').value;

  const geonamesUrl = `http://api.geonames.org/searchJSON?q=${destination}&maxRows=1&username=${API_KEYS.geonames}`;
  const weatherbitUrl = `https://api.weatherbit.io/v2.0/current?city=${destination}&key=${API_KEYS.weatherbit}`;
  const pixabayUrl = `https://pixabay.com/api/?q=${destination}&key=${API_KEYS.pixabay}`;

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
