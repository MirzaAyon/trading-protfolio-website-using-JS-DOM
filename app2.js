
const depositBtn = document.getElementById('deposit-btn')

const buyBtc = document.getElementById('buy-btc')
const buyEth = document.getElementById('buy-eth')


const balanceField = document.getElementById('balance-field');
const btcField = document.getElementById('btc-field');
const ethField = document.getElementById('eth-field');


depositBtn.addEventListener('click', function (event) {

    event.preventDefault()

    let depositBox = document.getElementById('deposit-box')
    let availableBalance = parseFloat(balanceField.innerText);
    // console.log(depositBox.value); //inspact e deposit korle 
    let inputAmount = parseFloat(depositBox.value);
    balanceField.innerText = inputAmount + availableBalance;
    depositBox.value = '';
    //validation na korle ulta palta click korle NaN show krbe
    //validation porer file e 
})
