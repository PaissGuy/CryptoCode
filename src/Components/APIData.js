import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoGrid from './CoinsRenderer';
import CryptoCoin from './CryptoCoin';
import { ConvertData } from '../helpers';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
const cc = require('cryptocompare');

let fetchCoins = async () => {
  // let coinList = (await cc.coinList());
  // console.log(coinList);
  const promise = axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH,BTC,SOL,LTC,BTT&tsyms=USD&api_key=f1642c3b30d3ad29218d4e73d31dc6c4eb6c2057ec1ac736f5d3fd36b26f9a91');

  const dataPromise = promise.then((response) =>
    response.data);

  return dataPromise;
}



function Icheck() {
  const [cryptos, setCryptos] = useState([]);
  // const response = fetchCoins();
  // console.log(response);
  useEffect(() => {
    const interval = setInterval(() => {
      const response = fetchCoins();
      response.then(data => {
        setCryptos(ConvertData(data));
      })
        .catch(err => console.log(err));
    }, 1000)
  }, []);


  return (
    <Router>
      <div>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/home" />} /> */}
          <Route path="/:id" element={<CryptoCoin data={cryptos} />} />
          <Route path="/CryptoCompare" element={<CryptoGrid data={cryptos} />} />
        </Routes>
      </div>
    </Router>
  );
}
export default Icheck;
