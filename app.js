var coinURL = "https://api.coindesk.com/v1/bpi/currentprice.json";

console.log(coinURL);

$.getJSON(coinURL, function(data){
    console.log(data);
    console.log(data.disclaimer);
});