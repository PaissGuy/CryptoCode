function UnixToDate(unix){
    let date = new Date(unix*1000);
    return date.toISOString().split('T')[0];
}

function ConvertData(cryptos) {
    if (cryptos.RAW !== undefined) {
        const dataArray = Object.values(cryptos.RAW).map((crypto) => {
            // let newCrypto = {...crypto.USD};
            let newCrypto = {};
            newCrypto.price = crypto.USD.PRICE;
            newCrypto.img = ["https://www.cryptocompare.com/" + crypto.USD.IMAGEURL,crypto.USD.FROMSYMBOL];
            newCrypto.id = crypto.USD.FROMSYMBOL;

            return newCrypto;
        });
        return dataArray;
    }
    else {
        return [];
    }
}

function ConvertHistory(history,data,id) {
    const coinData = data.filter(coin => coin.id === id)[0];
    if(history.Data !== undefined && data.length>0){
       const newHistory = history.Data.Data.map((day) => {
            let newDay ={};
            newDay.date = UnixToDate(day.time);
            newDay.price = day.close;
            return newDay;
        });
        newHistory.push(coinData.img[0]);
        return newHistory;
    }
    else{
        return [];
    }
}

export { ConvertData, ConvertHistory};