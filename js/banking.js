function getInnerTextValue(fieldId){
    const innerText = document.getElementById(fieldId);
    const InnerTextValue = parseFloat(innerText.innerText);
    return InnerTextValue
};

function getInputValue(fieldId){
    const inputFeild = document.getElementById(fieldId);
    const inputValue = parseFloat(inputFeild.value);
    inputFeild.value = "";
    return inputValue;    
};

function updateTotal(fieldId, amount){
    const totalFeild = getInnerTextValue(fieldId)
    const newTotal = totalFeild + amount;
    document.getElementById(fieldId).innerText = newTotal;
};

function updateBalance(amount, isadding){
    const balance = getInnerTextValue("total-balance")
    let newBalance;
    if (isadding == true){
        newBalance = balance + amount ; 
    }
    else{
        newBalance = balance - amount ; 
    }
    document.getElementById("total-balance").innerText = newBalance;
}

document.getElementById("deposit-btn").addEventListener("click", function(){
    const amount = getInputValue("deposit-amount");
    if(amount > 0){
        updateTotal("total-deposit", amount);
        updateBalance(amount, true)
    }
});

document.getElementById("withdraw-btn").addEventListener("click", function(){
    const amount = getInputValue("withdraw-amount");
    const balance = getInnerTextValue("total-balance")
    if(amount > 0 && balance >= amount){
        updateTotal("total-withdraw", amount);
        updateBalance(amount, false)
    }
});