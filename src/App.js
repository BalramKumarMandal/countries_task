import { useEffect, useState } from 'react';
import CountryCard from './CountryCard';

function App() {
  const [countries, setCountries] = useState([]);
  const API_Key = 'https://xcountries-backend.azurewebsites.net/all';
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchDatas = await fetch(API_Key);
        const getJson = await fetchDatas.json();
        setCountries(getJson);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {countries.map((data, inedx) => (
        <CountryCard
          key={data.abbr}
          flag={data.flag}
          name={data.name}
          alt={data.abbr}
        />
      ))}
    </div>
  );
}

export default App;
