const validPin = 1234
const transactionData = []
// function to get input values
function getInputValueNumber(id){
    const inputFiled = document.getElementById(id)
    const inputFiledValue = inputFiled.value
    const inputFiledValueNumber = parseInt(inputFiledValue)

    return inputFiledValueNumber
}
function getInputValue(id){
    const inputFiled = document.getElementById(id)
    const inputFiledValue = inputFiled.value
    

    return inputFiledValue
}
// function get innerText
function getInnerText(id){
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
    return elementValueNumber

}
// function to set innerText
function setInnerText(value){
    const availableBalanceElement = document.getElementById('available-balance')
    availableBalanceElement.innerText = value

}
// function to toggle
function handleToggle(id){
      const forms = document.getElementsByClassName('form')
    for(const form of forms){
        form.style.display = 'none'
    }
    document.getElementById(id).style.display = 'block'

}
// function to toggle buttons
function handleButtonToggle(id){
     const formBtns = document.getElementsByClassName('form-btn')
    // console.log(formBtns)
    for(const btn of formBtns){
        btn.classList.remove("border-[#0874F2]","bg-[#0874f20d]")
        btn.classList.add('border-gray-300')
    }
     document.getElementById(id).classList.remove("border-gray-300")
    document.getElementById(id).classList.add("border-[#0874F2]","bg-[#0874f20d]")

}




// add money feature

document.getElementById('add-money-btn')
.addEventListener('click',function(e){
    e.preventDefault()
    console.log('add money btn clicked')
    const bank = getInputValue('bank') 
    const accountNumber = document.getElementById('account-number').value 
    const amount = getInputValueNumber('add-amount')
    if(amount <= 0){
        alert("invalid amount")
        return;
    }
    const pin = getInputValueNumber('add-pin')
    // console.log(bank,accountNumber,amount,pin)
    const availableBalance = getInnerText('available-balance')
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
    setInnerText(totalNewAvailableBalance) 
    const data = {
        name:"Add Money",
        date:new Date().toLocaleDateString()
    }
    transactionData.push(data)



})

// cash out money feature

document.getElementById('withdraw-btn').addEventListener('click',function(e){
    e.preventDefault()
    // console.log('withdraw btn clicked');
    const amount = getInputValueNumber('withdraw-amount')
    const availableBalance = getInnerText('available-balance')
    if(amount <= 0 || amount > availableBalance){
        alert('invalid amount')
        return
    }
    const pin = getInputValueNumber('withdraw-pin')
    const accountNumber = getInputValue('withdraw-account-number')

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
    setInnerText(totalNewAvailableBalance) 

     const data = {
        name:"Cash Out",
        date:new Date().toLocaleDateString()
    }
    transactionData.push(data)


})

document.getElementById('transaction-button').addEventListener('click',function(){
    const transactionContainer = document.getElementById('transaction-container')
    transactionContainer.innerText = ""

    for(const data of transactionData){
        const div = document.createEvent("div")
        div.innerHTML = `   <div class="bg-white rounded-xl p-3 flex justify-between items-center">
        <div class="flex items-center ">
            <div class="border-2 p-3 rounded-full">
                <img src="./assets/wallet1.png" class="mx-auto" alt="">
            </div>
            <div class="ml-3">
                <h1>${data.name}</h1>
                <p>${data.date}</p>
            </div>
 
        </div>
        <i class="fa-solid fa-ellipsis"></i>
      </div> `
       
        transactionContainer.appendChild(div)
    }
})

// toggling feature
document.getElementById("add-button").addEventListener("click",function(){
    
    handleToggle('add-money-parent')
   handleButtonToggle('add-button')
    
})
document.getElementById("cash-out-button").addEventListener("click",function(){
    
    handleToggle('cash-out-parent')
    handleButtonToggle('cash-out-button')
   
})
document.getElementById('transfer-button').addEventListener('click',function(){
    
      handleToggle('transfer-money-parent')
      handleButtonToggle('transfer-button')
      
   

})
document.getElementById('bonus-button').addEventListener('click',function(){
   
    handleToggle('get-bonus-parent')
    handleButtonToggle('bonus-button')

})
document.getElementById('pay-bill-button').addEventListener('click',function(){
    handleToggle('get-pay-bill-parent')
    handleButtonToggle('pay-bill-button')
})
document.getElementById('transaction-button').addEventListener('click',function(){
    handleToggle('get-transaction-parent')
    handleButtonToggle('transaction-button')
})


