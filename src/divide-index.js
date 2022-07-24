"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const divideAndConquer_1 = require("./classes/divideAndConquer");
const test_1 = require("./classes/test");
const cities_json_1 = __importDefault(require("cities.json"));
const cities = cities_json_1.default;
cities.sort((a, b) => {
    if (a.name > b.name)
        return 1;
    if (a.name < b.name)
        return -1;
    return 0;
});
const iterations = 1;
const cityToSearch = 'Zayed City';
const iso = 'AE';
function match({ country, name }, cityName, countryIso) {
    return country === countryIso && name === cityName;
}
function findCityWithDivideAndConquer(cityName, iso) {
    return (0, divideAndConquer_1.divideAndConquerSearch)(cities, (city) => cityName > (city === null || city === void 0 ? void 0 : city.name), (city) => match(city, cityName, iso));
}
function findCityWithForLoop(cityName, iso) {
    for (let i = 0; i < cities.length; i++) {
        const city = cities[i];
        if (match(city, cityName, iso)) {
            return city;
        }
    }
    return null;
}
function findCityWithFind(cityName, iso) {
    return cities.find((city) => match(city, cityName, iso));
}
console.log(`Searching "${cityToSearch}(${iso})" through an array of ${cities.length} cities`);
console.log('- findCityWithDivideAndConquer O(logn)');
(0, test_1.test)(() => {
    findCityWithDivideAndConquer(cityToSearch, iso);
}, iterations);
console.log('- findCityWithForLoop O(n)');
(0, test_1.test)(() => {
    findCityWithForLoop(cityToSearch, iso);
}, iterations);
console.log('- findCityWithFind O(n)');
(0, test_1.test)(() => {
    findCityWithFind(cityToSearch, iso);
}, iterations);
