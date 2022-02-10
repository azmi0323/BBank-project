document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;

    const depositTotal = document.getElementById('deposit-total');

    const priviusDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(priviusDepositAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText = newDepositTotal;

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const priviusBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = priviusBalanceTotal + parseFloat(newDepositAmount);
    balanceTotal.innerText = newBalanceTotal;

    // clear input deposit 
    depositInput.value = ''
});

// handle withdrow
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');

    const newWithdrawAmount = withdrawInput.value;

    const withdrawTotal = document.getElementById('withdraw-total');

    const priviusWithdrawAmount = withdrawTotal.innerText;

    const newWithdrawTotal = parseFloat(priviusWithdrawAmount) + parseFloat(newWithdrawAmount);
    withdrawTotal.innerText = newWithdrawTotal;

    withdrawInput.value = '';

    // balance count 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const priviusBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = priviusBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
})