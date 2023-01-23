// export function formatAll(data) {
//   const formattedData = data.map((country) => {
//     formatCountry(country);
//   });
//   return formattedData;
// }

// export function formatCountry(country) {
//   return {
//     name: {
//       // common: country.name.common,
//       official: country.name.official,
//       code: country.cioc,
//     },
//     flag: {
//       emoji: country.flag,
//       png: country.flags.png,
//       svg: country.flags.svg,
//     },
//     languages: country.languages,
//     region: country.subregion,
//     continents: country.continents,
//     currencies: country.currencies,
//     capital: {
//       name: country.capital[0],
//       latitude: country.capitalInfo.latlng[0],
//       longitude: country.capitalInfo.latlng[1],
//     },
//     maps: country.maps.googleMaps,
//     population: parseInt(country.population),
//     areaSqkm: country.area,
//   };
// }
