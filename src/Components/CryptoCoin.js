import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    useParams,
    useNavigate
} from 'react-router-dom';
import { ConvertHistory } from '../helpers';
import ValueGraph from './ValueGraph';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import '../Styles/CryptoCoin.css'

let fetchHistory = async (id) => {

    const promise = axios.get(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${id}&tsym=USD&limit=30&api_key=f1642c3b30d3ad29218d4e73d31dc6c4eb6c2057ec1ac736f5d3fd36b26f9a91`);

    const dataPromise = promise.then((response) =>
        response.data);

    return dataPromise;
}

export default function CryptoCoin(props) {
    let { id } = useParams();
    const [history, setHistory] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const response = fetchHistory(id);
        response.then(data => {
            setHistory(ConvertHistory(data, props.data, id));
        })
            .catch(err => console.log(err));
    }, [])
    console.log(history);
    return (
        <div className='CryptoCoin'>
            <div className='CryptoCoin-img'>
                <img src={history.at(-1)} alt="Crypto Image" width="100" />
            </div>
            <h3>{id}: USD$</h3>
            <div className='CryptoCoin-Chart'>
                <ValueGraph data={history.slice(0, -1)} />
            </div>
            <div className='CryptoCoin-Button'>
                <button onClick={() => navigate('/CryptoCompare')}>home</button>
            </div>
        </div>
    );
}