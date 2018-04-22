console.log('client.js has loaded');

$(document).ready(onReady);

function onReady(){
    console.log('jQuery is loaded');
    $('#addButton').on('click', addNumbers);
    // $('subtractButton').on('click', subtractNumbers);
    // $('#multiplyButton').on('click', multiplyNumbers);
    // $('#divideButton').on('click', divideNumbers);

}

let x=0;
let y=0;
let type='Math';

function addNumbers(){
    //console.log('Add button clicked');
    const additionCollection = {
        x: ($('#firstInput').val()),
        y: ($('#secondInput').val()),
        type: 'Add'
    }
    //console.log('new math problem', addNumbers);
    $.ajax({
        type: 'POST',
        url: '/modules/additionCollection',
        data: addNumbers
    })
    .then(function(response){
        console.log(response);

    });
}