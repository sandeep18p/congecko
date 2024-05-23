import React from 'react';

import './App.css';

function TableRow({ crypto }) {
  return (
    <tr>
      <td><img src={crypto.image} alt={crypto.name} className="crypto-image" /></td>
      <td>{crypto.name}</td>
      <td>{crypto.symbol.toUpperCase()}</td>
      <td>${crypto.current_price.toLocaleString()}</td>
      <td>{crypto.total_volume.toLocaleString()}</td>
      <td  id={crypto.price_change_percentage_24h > 0 ? "green_text" : "red_text"}>${crypto.price_change_percentage_24h + "%"}</td>
      <td>
       {"$" + crypto.market_cap}
      </td>
      
    </tr>
  );
}

export default TableRow;
