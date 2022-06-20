// alert('Hello'); //etar mane js connect hoise
//age button gulake target kore nilam
const depositBtn = document.getElementById('deposit-btn')

const buyBtc = document.getElementById('buy-btc')
const buyEth = document.getElementById('buy-eth')

//ekhon input gulake target krbo
const balanceField = document.getElementById('balance-field');
const btcField = document.getElementById('btc-field');
const ethField = document.getElementById('eth-field');
//code e shob kichu target kora shesh

depositBtn.addEventListener('click', function (event) {
    //form er default behaviour holo deposit e click korle sheta refresh hbe and full website refresh hbe 
    event.preventDefault() //ei line ta likhar fole r repeat hbe na 

    let depositBox = document.getElementById('deposit-box')
    console.log(depositBox.value); //inspact e deposit korle 
    balanceField.innerText = depositBox.value;
    depositBox.value = '';
})
//ekhon porjnto ja input dibo tai ashbe and ager chole jabe and new arekta maan dile ager tar sathe add hbe na 
//baki part porer file e 