'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


// Pike Place

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
        var randomNum = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
        this.custPerHr.push(randomNum);
    }
}; 

firstAndPike.calcAverageCookiesPerHour = function() {
    // Call average customers function
    this.calcCustomersPerHour();
    // Multiply avg customers by avg cookies to get total cookies per hour
    for (var i = 0; i < hours.length; i++) {
        var avgCookies = Math.floor(this.custPerHr[i] * this.avgCookiesCust);
        this.cookiesPerHr.push(avgCookies);
    }
};

firstAndPike.render = function() {   
    var storeName = document.getElementById('cookiesList')
    var newH = document.createElement('h2');
    newH.textContent = this.name;
    storeName.appendChild(newH)

    for(var i = 0; i < hours.length; i++) {
        this.calcAverageCookiesPerHour();
        // Create an element
        var liEl = document.createElement('li');
        // Give the element content
        liEl.textContent = hours[i] + ': ' + this.cookiesPerHr[i] + ' cookies';
        // Append child to parent
        storeName.appendChild(liEl);   
    }
};

// SeaTac Airport

var seaTac = {
    name: 'SeaTac Airport',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookiesCust: 1.2,
    custPerHr: [],
    cookiesPerHr: [],
    totalCookiesSold: 0

};

seaTac.calcCustomersPerHour = function() {
    for(var i = 0; i < hours.length; i++) {
        // Create a random number to use as a simulated amount of customers & put into array
        var randomNum = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
        this.custPerHr.push(randomNum);
    }
}; 

seaTac.calcAverageCookiesPerHour = function() {
    // Call average customers function
    this.calcCustomersPerHour();
    // Multiply avg customers by avg cookies to get total cookies per hour
    for (var i = 0; i < hours.length; i++) {
        var avgCookies = Math.floor(this.custPerHr[i] * this.avgCookiesCust);
        this.cookiesPerHr.push(avgCookies);
    }
};

seaTac.render = function() {   
    var storeName = document.getElementById('cookiesList')
    var newH = document.createElement('h2');
    newH.textContent = this.name;
    storeName.appendChild(newH);

    for(var i = 0; i < hours.length; i++) {
        this.calcAverageCookiesPerHour();
        // Create an element
        var liEl = document.createElement('li');
        // Give the element content
        liEl.textContent = hours[i] + ': ' + this.cookiesPerHr[i] + ' cookies';
        // Append child to parent
        storeName.appendChild(liEl);   
    }
};

// Seattle Center

var seattleCenter = {
    name: 'Seattle Center',
    minCustomers: 11,
    maxCustomers: 38,
    avgCookiesCust: 3.7,
    custPerHr: [],
    cookiesPerHr: [],
    totalCookiesSold: 0

};


seattleCenter.calcCustomersPerHour = function() {
    for(var i = 0; i < hours.length; i++) {
        // Create a random number to use as a simulated amount of customers & put into array
        var randomNum = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
        this.custPerHr.push(randomNum);
    }
}; 

seattleCenter.calcAverageCookiesPerHour = function() {
    // Call average customers function
    this.calcCustomersPerHour();
    // Multiply avg customers by avg cookies to get total cookies per hour
    for (var i = 0; i < hours.length; i++) {
        var avgCookies = Math.floor(this.custPerHr[i] * this.avgCookiesCust);
        this.cookiesPerHr.push(avgCookies);
    }
};

seattleCenter.render = function() {   
    var storeName = document.getElementById('cookiesList')
    var newH = document.createElement('h2');
    newH.textContent = this.name;
    storeName.appendChild(newH);

    for(var i = 0; i < hours.length; i++) {
        this.calcAverageCookiesPerHour();
        // Create an element
        var liEl = document.createElement('li');
        // Give the element content
        liEl.textContent = hours[i] + ': ' + this.cookiesPerHr[i] + ' cookies';
        // Append child to parent
        storeName.appendChild(liEl);   
    }
};

// Capitol Hill

var capitolHill = {
    name: 'Capitol Hill',
    minCustomers: 20,
    maxCustomers: 38,
    avgCookiesCust: 2.3,
    custPerHr: [],
    cookiesPerHr: [],
    totalCookiesSold: 0

};

capitolHill.calcCustomersPerHour = function() {
    for(var i = 0; i < hours.length; i++) {
        // Create a random number to use as a simulated amount of customers & put into array
        var randomNum = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
        this.custPerHr.push(randomNum);
    }
}; 

capitolHill.calcAverageCookiesPerHour = function() {
    // Call average customers function
    this.calcCustomersPerHour();
    // Multiply avg customers by avg cookies to get total cookies per hour
    for (var i = 0; i < hours.length; i++) {
        var avgCookies = Math.floor(this.custPerHr[i] * this.avgCookiesCust);
        this.cookiesPerHr.push(avgCookies);
    }
};

capitolHill.render = function() {   
    var storeName = document.getElementById('cookiesList')
    var newH = document.createElement('h2');
    newH.textContent = this.name;
    storeName.appendChild(newH);

    for(var i = 0; i < hours.length; i++) {
        this.calcAverageCookiesPerHour();
        // Create an element
        var liEl = document.createElement('li');
        // Give the element content
        liEl.textContent = hours[i] + ': ' + this.cookiesPerHr[i] + ' cookies';
        // Append child to parent
        storeName.appendChild(liEl);   
    }
};

// Alki

var alki = {
    name: 'Alki',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookiesCust: 1.2,
    custPerHr: [],
    cookiesPerHr: [],
    totalCookiesSold: 0

};


alki.calcCustomersPerHour = function() {
    for(var i = 0; i < hours.length; i++) {
        // Create a random number to use as a simulated amount of customers & put into array
        var randomNum = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
        this.custPerHr.push(randomNum);
    }
}; 

alki.calcAverageCookiesPerHour = function() {
    // Call average customers function
    this.calcCustomersPerHour();
    // Multiply avg customers by avg cookies to get total cookies per hour
    for (var i = 0; i < hours.length; i++) {
        var avgCookies = Math.floor(this.custPerHr[i] * this.avgCookiesCust);
        this.cookiesPerHr.push(avgCookies);
    }
};

alki.render = function() {   
    var storeName = document.getElementById('cookiesList')
    var newH = document.createElement('h2');
    newH.textContent = this.name;
    storeName.appendChild(newH);

    for(var i = 0; i < hours.length; i++) {
        this.calcAverageCookiesPerHour();
        // Create an element
        var liEl = document.createElement('li');
        // Give the element content
        liEl.textContent = hours[i] + ': ' + this.cookiesPerHr[i] + ' cookies';
        // Append child to parent
        storeName.appendChild(liEl);   
    }
};

// Function Call

firstAndPike.render();
seaTac.render();
seattleCenter.render();
capitolHill.render();
alki.render();