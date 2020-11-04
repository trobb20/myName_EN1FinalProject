// ALL OF THIS WOULD BE "hidden" IN A SCRIPT SRC FILE
function button_function(elem) {
    alert('Set airtable attribute "' + elem.getAttribute('airtable_value') + '" to be "' + elem.innerHTML + '"');
}
function range_function(elem) {
    alert('Set airtable attribute "' + elem.getAttribute('airtable_value') + '" to be "' + elem.value + '"');
}
function text_function(elem){
    alert('Set airtable attribute "' + elem.getAttribute('airtable_value') + '" to be "' + elem.value + '"');
}
//test
function setup() {
    d = document.querySelectorAll("button");
    for (i=0; i<d.length; i++) {
        d[i].onclick = function () { button_function(this); }
    }
    d = document.querySelectorAll("input[type=range]");
    for (i=0; i<d.length; i++) {
        d[i].onclick = function () { range_function(this); }
    }
    d = document.querySelectorAll("input[type=text]");
    for (i=0; i<d.length; i++) {
        d[i].onchange = function () { text_function(this); }
    }
}