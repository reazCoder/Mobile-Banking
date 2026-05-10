const validPin = 1234
// add money feature

document.getElementById('add-money-btn')
.addEventListener('click',function(e){
    e.preventDefault()
    console.log('add money btn clicked')
    const bank = document.getElementById('bank').value 
    const accountNumber = document.getElementById('account-number').value 
    const amount = parseInt(document.getElementById('add-amount').value )
    const pin = parseInt(document.getElementById('add-pin').value )
    // console.log(bank,accountNumber,amount,pin)
    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    // console.log(availableBalance)
    if(accountNumber.length < 11){
        alert('please provide valid account number')
        return;
    }
    if(pin !== validPin){
        alert('please provide valid pin number')
        return;
    }
    const totalNewAvailableBalance = amount + availableBalance
    document.getElementById('available-balance').innerText = totalNewAvailableBalance 


})

// cash out money feature

document.getElementById('withdraw-btn').addEventListener('click',function(e){
    e.preventDefault()
    // console.log('withdraw btn clicked');
    const amount = parseInt(document.getElementById('withdraw-amount').value)
    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    const pin = parseInt(document.getElementById('withdraw-pin').value )
    const accountNumber = document.getElementById('withdraw-account-number').value 

    // console.log(amount,availableBalance)
     if(accountNumber.length < 11){
        alert('please provide valid account number')
        return;
    }
    if(pin !== validPin){
        alert('please provide valid pin number')
        return;
    }
    const totalNewAvailableBalance = availableBalance - amount
    document.getElementById('available-balance').innerText = totalNewAvailableBalance 


})

// toggling feature
document.getElementById("add-button").addEventListener("click",function(){
    document.getElementById('cash-out-parent').style.display = "none" 
    document.getElementById('add-money-parent').style.display = "block"
})
document.getElementById("cash-out-button").addEventListener("click",function(){
    document.getElementById('cash-out-parent').style.display = "block" 
    document.getElementById('add-money-parent').style.display = "none"
})

