
var appliance = document.querySelector('#appliance');
var watts = document.querySelector('#watts');
var hours = document.querySelector('#hours');
var unit = document.querySelector('#unit');

var submit = document.querySelector('#submit');
submit.addEventListener('click', getValues);

var resHeader = document.querySelector('#resHeader');
var resFooter = document.querySelector('#resFooter');
var outContainer2 = document.querySelector('.outContainer2');

var grandTotalWatts = 0;

function getValues() {
    if (appliance.value == "" || watts.value == "" || hours.value == "") {
        alert('Please enter all details')
    }
    else {
        var div = document.createElement('div');

        var text2 = document.createElement('span');
        text2.textContent = appliance.value;
        var text3 = document.createElement('span');
        text3.textContent = watts.value;
        var text4 = document.createElement('span');
        text4.textContent = hours.value + ' hour(s) per ' + unit.value;

        var totalWatts;
        if (unit.value == 'Day') {
            totalWatts = Number(watts.value) * Number(hours.value) * 30;
            grandTotalWatts += Number(watts.value) * Number(hours.value) * 30;

        }
        else {
            totalWatts = Number(watts.value) * Number(hours.value);
            grandTotalWatts += Number(watts.value) * Number(hours.value);
        }

        var text5 = document.createElement('span');
        text5.textContent = totalWatts;



        div.append(text2, text3, text4, text5)
        resHeader.append(div)
        document.querySelector('#myForm').reset();
        footer()
    }
}

function footer() {

    resFooter.textContent = "";

    var div = document.createElement('div');

    var text2 = document.createElement('span');
    text2.textContent = "";
    var text3 = document.createElement('span');
    text3.textContent = "";
    var text4 = document.createElement('span');
    text4.textContent = "Total watts";
    var text5 = document.createElement('span');
    text5.textContent = grandTotalWatts;

    div.append(text2, text3, text4, grandTotalWatts)
    resFooter.append(div)
    billDisplay()
}

function billDisplay() {
    outContainer2.textContent = '';

    var units = grandTotalWatts / 1000;
    var above500 = units - 500;
    var between300and500 = units - 300;
    var between100and300 = units - 100;
    var below100 = units;
    var total4 = ((above500 * 10) + (200 * 7) + (200 * 5) + (100 * 4))
    var total3 = ((between300and500 * 7) + (200 * 5) + (100 * 4))
    var total2 = ((between100and300 * 5) + (100 * 4))
    var total1 = below100 * 4;


    var h3 = document.createElement('h3');
    h3.setAttribute('class', 'center');
    h3.textContent = "Bill";

    var br = document.createElement('br');
    var hr = document.createElement('hr');

    if (units > 500) {
        var p = document.createElement('p');
        p.textContent = 'Units = ' + units;

        var p1 = document.createElement('p');
        p1.textContent = 'Charge for above 500 units @10 Rs. = ' + (units - 500) * 10;

        var p2 = document.createElement('p');
        p2.textContent = 'Charge for between 300 & 500 units @7 Rs. = ' + 200 * 7;

        var p3 = document.createElement('p');
        p3.textContent = 'Charge for between 100 & 300 units @5 Rs. = ' + 200 * 5;

        var p4 = document.createElement('p');
        p4.textContent = 'Charge for below 100 units @4 Rs. =' + 100 * 4;

        var p5 = document.createElement('p');
        p5.setAttribute('class', 'strong');
        p5.textContent = 'Total amount = ' + total4;

        outContainer2.append(h3, br, p, p1, p2, p3, p4, p5, hr)
    }

    else if (units > 300) {
        var p = document.createElement('p');
        p.textContent = 'Units = ' + units;

        var p2 = document.createElement('p');
        p2.textContent = 'Charge for between 300 & 500 units @7 Rs. = ' + (units - 300) * 7;

        var p3 = document.createElement('p');
        p3.textContent = 'Charge for between 100 & 300 units @5 Rs. = ' + 200 * 5;

        var p4 = document.createElement('p');
        p4.textContent = 'Charge for below 100 units @4 Rs. =' + 100 * 4;

        var p5 = document.createElement('p');
        p5.setAttribute('class', 'strong');
        p5.textContent = 'Total amount = ' + total3;

        outContainer2.append(h2, br, p, p2, p3, p4, p5, hr)
    }
    else if (units > 100) {
        var p = document.createElement('p');
        p.textContent = 'Units = ' + units;

        var p3 = document.createElement('p');
        p3.textContent = 'Charge for between 100 & 300 units @5 Rs. = ' + (units - 100) * 5;

        var p4 = document.createElement('p');
        p4.textContent = 'Charge for below 100 units @4 Rs. =' + 100 * 4;

        var p5 = document.createElement('p');
        p5.setAttribute('class', 'strong');
        p5.textContent = 'Total amount = ' + total2;

        outContainer2.append(h2, br, p, p3, p4, p5, hr)
    }
    else {
        var p = document.createElement('p');
        p.textContent = 'Units = ' + units;


        var p4 = document.createElement('p');
        p4.textContent = 'Charge for below 100 units @4 Rs. =' + units * 4;

        var p5 = document.createElement('p');
        p5.setAttribute('class', 'strong');
        p5.textContent = 'Total amount = ' + total1;

        outContainer2.append(h2, br, p, p4, p5, hr)
    }
    console.log(above500)
}

