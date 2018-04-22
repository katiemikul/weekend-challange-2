console.log('client.js has loaded');

$(document).ready(onReady);

function onReady(){
    console.log('jQuery is loaded');
    $('#addButton').on('click', addNumbers);
    $('#subtractButton').on('click', subtractNumbers);
    // $('#multiplyButton').on('click', multiplyNumbers);
    // $('#divideButton').on('click', divideNumbers);

}

let x=0;
let y=0;
let type='Math';

//Addition Section
function addNumbers(){
    console.log('Add button clicked');
    const additionCollection = {
        x: ($('#firstInput').val()),
        y: ($('#secondInput').val()),
        type: 'Add'
    }
    console.log('new math problem', addNumbers);
    $.ajax({
        type: 'POST',
        url: '/addition',
        data: addNumbers
    })
    .then(function(response){
        console.log(response);

    });
}

function requestAddition(){
    $.ajax({
        type: 'GET',
        url: '/request-addition',
    })
    .then(function(response){
        console.log(response);
        let x=number($('#firstInput').val());
        let y=number($('#secondInput').val())
        let sum=x+y;
        $('#calcHistory').empty();
        $('#calcHistory').prepend('<p>' + 'x' + '+' + 'y' + '=' + 'sum' + '</p>');
    })
}

//Subtraction Section
function subtractNumbers(){
    console.log('Subtract button clicked');
    const subtionCollection = {
        x: ($('#firstInput').val()),
        y: ($('#secondInput').val()),
        type: 'Subtract'
    }
    console.log('new math problem', subtractNumbers);
    $.ajax({
        type: 'POST',
        url: '/subtraction',
        data: subtractNumbers
    })
    .then(function(response){
        console.log(response);

    });
}

function requestSubtraction(){
    $.ajax({
        type: 'GET',
        url: '/request-subtraction',
    })
    .then(function(response){
        console.log(response);
        let x=number($('#firstInput').val());
        let y=number($('#secondInput').val())
        let sum=x-y;
        $('#calcHistory').empty();
        $('#calcHistory').prepend('<p>' + 'x' + '-' + 'y' + '=' + 'sum' + '</p>');
    })
}