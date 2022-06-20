
const depositBtn = document.getElementById('deposit-btn')

const buyBtc = document.getElementById('buy-btc')
const buyEth = document.getElementById('buy-eth')


const balanceField = document.getElementById('balance-field');
const btcField = document.getElementById('btc-field');
const ethField = document.getElementById('eth-field');

//get value from input
function getInputValue(boxID) {
    let inputBox = document.getElementById(boxID)
    let inputAmount = parseFloat(inputBox.value)
    if (isNaN(inputAmount) || inputAmount < 0) {
        inputBox.value = '';
        return alert('please input valid amount of money in number format')
    }

    inputBox.value = '';
    return inputAmount;
}



//update balance
depositBtn.addEventListener('click', function (event) {

    event.preventDefault()

    // let depositBox = document.getElementById('deposit-box')
    // let availableBalance = parseFloat(balanceField.innerText);

    // let inputAmount = parseFloat(depositBox.value);
    // if (isNaN(inputAmount) || inputAmount < 0) {
    //     depositBox.value = '';
    //     return alert('please input valid amount of money in number format')
    // }
    let availableAmount = parseFloat(balanceField.innerText);
    let inputAmount = getInputValue('deposit-box')
    // console.log(inputAmount);
    if (inputAmount > 0) {
        balanceField.innerText = inputAmount + availableAmount;
    }

    // depositBox.value = '';

})
