'use strict';

// Create an array for shop hours
var hours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];

// Declare main array
 var allStores = [];

// Create constructor function
function Store (storeFront, minCustomersPerHr, maxCustomersPerHr, averageCookiesPerCustomer) {
    this.storeFront = storeFront;
    this.minCustomersPerHr = minCustomersPerHr;
    this.maxCustomersPerHr = maxCustomersPerHr;
    this.averageCookiesPerCustomer = averageCookiesPerCustomer;
    this.avgCustomersPerHour = [];
    this.avgCookiesPerHour = [];
    this.totalCookiesSoldPerDay = [];
    allStores.push(this);
};

// Link table to HTML
var cookiesTable = document.getElementById('cookieSales');

// Create a random number generator for number of customers
this.calcCustomersPerHour = function() 
    {
    for (var i in hours) {
        this.avgCustomersPerHour[i] = Math.ceil(Math.random() * (this.maxCustomersPerHr - this.minCustomersPerHr) + 1 + this.minCustomersPerHr);
        avgCustomersPerHour.push(this);
    }
};

// Multiply number of customers by avg number of cookies to get hourly sales
this.calcCookiesPerHour = function() {
    for (var i in hours) {
        this.calcCustomersPerHour();
        this.avgCookiesPerHour[i] = Math.ceil(100 * this.avgCustomersPerHour[i] * this.averageCookiesPerCustomer) / 100;
        avgCookiesPerHour.push(this);
    }
};

// Total the sales for the day
this.calcTotalSalesPerDay = function() {
    this.calcCookiesPerHour();
    this.totalCookiesSoldPerDay[i] = this.avgCookiesPerHour[i] + this.totalCookiesSoldPerDay[i];
    totalCookiesSoldPerDay.push(this);
};
        
// Create instances for each store
new Store('First and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store ('Seattle Center', 11, 38, 3.7);
new Store ('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);
console.table(allStores);

// Render table
Store.prototype.render = function() {
    // Create row
    var trEl = document.createElement('tr');
    // Create cell
    var tdEl = document.createElement('td');
    // Content - hours
    tdEl.textContent = this.hours;
    trEl.appendChild(tdEl);
    // Content - store name
    tdEl.textContent = this.storeFront;
    trEl.appendChild(tdEl);
    // Content - avg customers per hour
    tdEl.textContent = this.avgCustomersPerHour;
    trEl.appendChild(tdEl);
    //Content - avg cookies per hour
    tdEl.textContent = this.avgCookiesPerHour;
    trEl.appendChild(tdEl);
    // Content - total
    tdEl.textContent = this.totalCookiesSoldPerDay;
    trEl.appendChild(tdEl);
    // Append to tr
    cookiesTable.appendChild(trEl);
};

// function to render all table
function renderAllStores () {
    for (var i in allStores) {
        allStores[i].render();
    }
};

// // Function call
renderAllStores();
