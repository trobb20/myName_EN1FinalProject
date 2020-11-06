
/*
Airtable_script.js
Edited 11-4-20 
Ethan Danahy, Teddy Robbins, Jeremy Jung
*/

var airtableElement = document.getElementById("service_airtable");
airtableElement.init();
var my_airtable = airtableElement.getService();

function updateOnAirtable(key, newValue) {
    /* check if given key already exists on Airtable*/
    var names = my_airtable.getNames();
    var exists = false;
    for (var index in names) {
        if (names[index] == key) {
            exists = true;
            break;
        }
    }

    // key already exists, only update
    if (exists) {
        // update key and value on Airtable
        my_airtable.updateValue(key, newValue);
    }
    // key does not exist, create a new pair
    else {
        my_airtable.createNameValuePair(key, newValue)
    }
}

//Wrapper functions for updating airtable based on button, slider, and text input
function button_function(elem) {
    // retrieve key & value pairs from buttons' attributes
    var key = elem.getAttribute('airtable_value');
    var newValue = elem.innerHTML;
    
    // update or create Name & Value pair on Airtable
    updateOnAirtable(key, newValue);

    // alert user of change
    alert('Set airtable attribute "' + key + '" to be "' + newValue + '"');

}
function range_function(elem) {
    // retrieve key & value pairs from buttons' attributes
    var key = elem.getAttribute('airtable_value');
    var newValue = elem.value;

    // update or create Name & Value pair on Airtable
    updateOnAirtable(key, newValue);

    // alert user of change
    alert('Set airtable attribute "' + key + '" to be "' + newValue + '"');
}

function text_function(elem){
    // retrieve key & value pairs from buttons' attributes
    var key = elem.getAttribute('airtable_value');
    var newValue = elem.value;

    // update or create Name & Value pair on Airtable
    updateOnAirtable(key, newValue);

    // alert user of change
    alert('Set airtable attribute "' + key + '" to be "' + newValue + '"');
}

//Setup for assigning elements to wrapper functions
function setup() {
    d = document.querySelectorAll("button");
    for (i=0; i<d.length; i++) {
        d[i].onclick = function () { button_function(this); }
    }
    d = document.querySelectorAll("input[type=range]");
    for (i=0; i<d.length; i++) {
        d[i].onclick = function () { range_function(this); }
    }
    d = document.querySelectorAll("form");
    for (i=0; i<d.length; i++) {
        
        var current_form = d[i];
        var text_entry = d[i].elements[0];
        var submit_button = d[i].elements[1];

        submit_button.onclick = function () { text_function(text_entry); }

    }
}

window.addEventListener('load', function () {
        setup();
});