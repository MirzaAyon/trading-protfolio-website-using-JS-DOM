
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


    let availableAmount = parseFloat(balanceField.innerText);
    let inputAmount = getInputValue('deposit-box')
    // console.log(inputAmount);
    if (inputAmount > 0) {
        balanceField.innerText = inputAmount + availableAmount;
    }

    // depositBox.value = '';

})
//buy coins

buyBtc.addEventListener('click', function () {
    updatePortfolio('btc-box');
})
buyEth.addEventListener('click', function () {
    updatePortfolio('eth-box');
})
//update portfolio                   
function updatePortfolio(boxID) {
    let availableAmount = parseFloat(balanceField.innerText);
    let coinAmount = getInputValue(boxID);
    if (coinAmount > 0) {
        let totalExpense
        if (boxID == "btc-box") {
            totalExpense = 10 * coinAmount;
            if (totalExpense > availableAmount) {
                return alert('not enough balance')
            }
            btcField.innerText = coinAmount;
        } else if (boxID == "eth-box") {
            totalExpense = 5 * coinAmount;
            if (totalExpense > availableAmount) {
                return alert('not enough balance')
            }
            ethField.innerText = coinAmount;

        }
        balanceField.innerText = availableAmount - totalExpense;
    }

}
