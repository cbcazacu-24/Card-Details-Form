// declare button and all input fields
const btn = document.getElementById('btn');
const form = document.getElementById('form')

const nameInput = document.getElementById('nameInput');
const cardNoInput = document.getElementById('cardNoInput');
const monthInput = document.getElementById('monthInput');
const yearInput = document.getElementById('yearInput');
const cvcInput = document.getElementById('cvcInput');

// declaring error fields
const errName = document.getElementById('errName');
const errCard = document.getElementById('errCard');
const errNumber = document.getElementById('errNumber')
const errDate = document.getElementById('errDate') ;
const errCVC = document.getElementById('errCVC') ;


form.addEventListener('submit', (e) => {
    e.preventDefault();

    // checking if the inputs are empty and displayng empty fields message
    if(nameInput.value === '' || nameInput.value == null) {
        errName.innerHTML = 'Field cannot be empty';
    }

    if(cardNoInput.value === '' || cardNoInput.value == null) {
        errCard.innerHTML = 'Field cannot be empty';
    }

    if(monthInput.value === '' || monthInput.value == null) {
        errDate.innerHTML = 'Field cannot be empty';
    }
    if(yearInput.value === '' || yearInput.value == null) {
        errDate.innerHTML = 'Field cannot be empty';
    }

    if(cvcInput.value === '' || cvcInput.value == null) {
        errCVC.innerHTML = 'Field cannot be empty';
    }






    // declaring variables to use in if statments checking if inpouts are numbers
    let cardNo = cardNoInput.value;
    let monthNo = monthInput.value;
    let yearNo = yearInput.value;
    let cvcNo = cvcInput.value;

    // checking if the card number input is a number and displayng wrong format message
    if(!isNaN(Number(cardNo))) {

    }else {
        errNumber.innerHTML = 'Wrong format, numbers only!'
    }
    
    // checking if the date inputs is a number and displayng wrong format message
    
    if(!isNaN(Number(monthNo)) || !isNaN(Number(yearNo))) {
    
    }else {
        errDate.innerHTML = 'Wrong format, numbers only!'
    }
    
    // checking if the CVC number input is a number and displayng wrong format message
    
    if(!isNaN(Number(cvcNo))) {
    
    }else {
        errCVC.innerHTML = 'Wrong format, numbers only!'
    }



    // updating visible values with inputs from user
    let name = document.querySelector('#name');
    name.textContent = nameInput.value;

    let cardNumber = document.querySelector('#cardNo');
    cardNumber.textContent = cardNoInput.value;

    let date = document.querySelector('#date');
    date.textContent = `${monthInput.value} / ${yearInput.value}`;

    let cvc = document.querySelector('#cvc');
    cvc.textContent = cvcInput.value;




    // getting confirmation screen when all inputs are correct
    let inputs = document.querySelector('.securityInfo');
    inputs.classList.remove('.')


})






