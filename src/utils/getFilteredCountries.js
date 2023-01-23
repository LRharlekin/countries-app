export default function getFilteredCountries(query, data) {
  if (!query) {
    return data;
  }
  query.toLowerCase();
  return data.filter((country) =>
    country.name.common.toLowerCase().includes(query)
  );
}
