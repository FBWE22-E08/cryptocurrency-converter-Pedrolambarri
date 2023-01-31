import "./css/style.css"; //importing css

const form = document.querySelector("#conversion-form");
const cryptoCurrency = document.querySelector('.cryptoSelect');
const inputAmount = document.querySelector('#inputAmount');
const currency = document.querySelector('#dropdown2');
const btn = document.querySelector('.btn');
let output = document.querySelector('#output');

async function currencyFetch(e) {
    e.preventDefault();
    try {
        let response = await fetch(`https://api.coinconvert.net/convert/${cryptoCurrency.value}/${currency.value}?amount=${inputAmount.value}`);
        let data = await response.json();
       
        console.log(data);
      
        output.value = Object.values(data)[2];
       

    }
        catch (err) {
            console.log(err);
        }

}

form.addEventListener("submit", currencyFetch);