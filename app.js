var coinURL = "https://api.coindesk.com/v1/bpi/currentprice.json";

console.log(coinURL);

$.getJSON(coinURL, function(data){
    console.log(data);
    console.log(data.disclaimer);
    console.log(data.time.updated);
    document.getElementById("currentTime").innerHTML = "updated date " + data.time.updated;
});


$url = "https://pro-api.coingecko.com/api/v3/coins/list";

$.getJSON($url, function(response) {

    console.log("response data", response);
});