import { divideAndConquerSearch }  from './classes/divideAndConquer';
import { test }  from './classes/test';
import citiesJson from 'cities.json';

type City = {
  country: string;
  name: string;
  lat: string;
  lng: string;
}

const cities = citiesJson as City[];
cities.sort((a,b) => {
  if(a.name > b.name) return 1;
  if(a.name < b.name) return -1;
  return 0;
})
const iterations = 1;
const cityToSearch = 'Zayed City';
const iso = 'AE';

function match({ country, name }: City, cityName: string, countryIso: string) {
  return country === countryIso && name === cityName;
}

function findCityWithDivideAndConquer(cityName: string, iso: string) {
  return divideAndConquerSearch(cities, (city) => cityName > city?.name, (city) => match(city, cityName, iso));
}

function findCityWithForLoop(cityName: string, iso: string) {
  for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    if (match(city, cityName, iso)) {
      return city;
    }    
  }
  return null;
}

function findCityWithFind(cityName: string, iso: string) {
  return cities.find((city) => match(city, cityName, iso));
}

console.log(`Searching "${cityToSearch}(${iso})" through an array of ${cities.length} cities`)

console.log('- findCityWithDivideAndConquer O(logn)');
test(() => {  
  findCityWithDivideAndConquer(cityToSearch, iso);
}, iterations);

console.log('- findCityWithForLoop O(n)');
test(() => {
  findCityWithForLoop(cityToSearch, iso);
}, iterations);

console.log('- findCityWithFind O(n)');
test(() => {
  findCityWithFind(cityToSearch, iso);
}, iterations);