'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {
        name: 'Pike Place Market',
        minCustomers: 23,
        maxCustomers: 65,
        avgCookiesCust: 6.3,
        custPerHr: [],
        cookiesPerHr: [],
        totalCookiesSold: 0

};


firstAndPike.calcCustomersPerHour = function() {
    for(var i = 0; i < hours.length; i++) {
        // Create a random number to use as a simulated amount of customers & put into array
        this.custPerHr.push(randomNumGen(this.minCustomers, this.maxCustomers));
    }
}; 

firstAndPike.calcAverageCookiesPerHour = function() {
    // Call average customers function
    firstAndPike.calcCustomersPerHour();
    // Multiply avg customers by avg cookies to get total cookies per hour
    for (var i = 0; i < hours.length; i++) {
        this.cookiesPerHr.push(Math.ceil(this.custPerHr[i] * this.avgCookiesCust));
        this.totalCookiesSold = this.totalCookiesSold + this.cookiesPerHr[i];
    }
};

firstAndPike.render = function() {    
    // Call cookies per hour
    firstAndPike.calcAverageCookiesPerHour();
    // Grab parent from DOM
    var ulEl = document.getElementById('firstPike');
    for(var i = 0; i < hours.length; i++) {
        // Create an element
        var liEl = document.createElement('li');
        // Give the element content
        liEl.textContent = hours[i] + ': ' + this.cookiesPerHr[i] + ' cookies';
        // Append child to parent
        ulEl.appendChild(liEl);   
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookiesSold + ' cookies'
    ulEl.appendChild(liEl);
};

function randomNumGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

firstAndPike.render();