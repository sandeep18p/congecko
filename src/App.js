import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const apiUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
        const response = await fetch(apiUrl);
        const data = await response.json();
        setCryptoData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Crypto Prices</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Current Price</th>
              <th>Total Volume</th>
              <th>Price Change 24h %</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData.map(crypto => (
              <TableRow key={crypto.id} crypto={crypto} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
