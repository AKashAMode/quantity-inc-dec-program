
const digit = document.getElementById('digit');

function incOper(){
    let quantity = parseInt(digit.innerText);
    digit.innerText = ++quantity;
    
}

function decOper(){
    let quantity = parseInt(digit.innerText);
    if(quantity > 1){
        digit.innerText = --quantity;
    }
  
    
}