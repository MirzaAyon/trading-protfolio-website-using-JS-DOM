
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
    if (isNaN(inputAmount) || inputAmount < 0) {
        depositBox.value = ''; //ei jinish ta abr dilam jeno ok dewar por likhe rakha jinish ta chole jae
        return alert('please input valid amount of money in number format')
    }
    balanceField.innerText = inputAmount + availableBalance;
    depositBox.value = '';

})
