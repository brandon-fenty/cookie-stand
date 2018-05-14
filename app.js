'use strict';

// Declare global variable for form
var newStoreForm = document.getElementById('newStoreForm');
// Declare main array
var allStores = [];

 // Create an array for shop hours
var hours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];

// Create constructor function
function Store (storeFront, minCustomersPerHr, maxCustomersPerHr, averageCookiesPerCustomer) {
    this.storeFront = storeFront;
    this.minCustomersPerHr = minCustomersPerHr;
    this.maxCustomersPerHr = maxCustomersPerHr;
    this.averageCookiesPerCustomer = averageCookiesPerCustomer;

    this.avgCustomersPerHour = [];
    this.avgCookiesPerHour = [];
    this.totalCookiesSoldPerDay = 0;
    
    allStores.push(this);
};


// Create a random number generator for number of customers
Store.prototype.calcCustomersPerHour = function() {
    for (var i in hours) {       
        var randomNumber = randomNumGen(this.minCustomersPerHr, this.maxCustomersPerHr);
        this.avgCustomersPerHour.push(randomNumber);
    }
};

// Multiply number of customers by avg number of cookies to get hourly sales
Store.prototype.calcCookiesPerHour = function() {
    // Call previous function
    this.calcCustomersPerHour();
    
    for (var i in hours) {
        var avgCust = Math.floor(this.avgCustomersPerHour[i] * this.averageCookiesPerCustomer)
        this.avgCookiesPerHour.push(avgCust);
        // Total sales
        this.totalCookiesSoldPerDay = this.totalCookiesSoldPerDay + this.avgCookiesPerHour[i];
        // this.totalCookiesSoldPerDay += this.avgCookiesPerHour[i]; <---- Shorthand
    }
};

// Render table
Store.prototype.render = function() {
    // Call previous function
    this.calcCookiesPerHour();
    
    // Link table to HTML
    var tableEl = document.getElementById('cookieSales');
    // Create table row element
    var trEl = document.createElement('tr');
    // Create table data element
    var tdEl = document.createElement('td');
    // Content - store name
    tdEl.textContent = this.storeFront;
    trEl.append(tdEl);
    
    for(var i in hours) {
        //Content - avg cookies per hour
        tdEl = document.createElement('td');
        tdEl.textContent = this.avgCookiesPerHour[i];
        trEl.append(tdEl);
    }
    // Content - total cookie sales
    tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesSoldPerDay;
    trEl.append(tdEl);

    // Append to tr
    tableEl.append(trEl);
};

// function to render all table
function renderAllStores () {
    // Clear old table
    cookieSales.innerHTML = '';
    // Link table to HTML
    var tableEl = document.getElementById('cookieSales');
    // Create table row element
    var trEl = document.createElement('tr');
    // create column for locations
    var thEl = document.createElement('th');
    // Create table row element
    thEl.textContent = 'Store Location';
    trEl.append(thEl);

    // Create table header
    for(var j in hours) {
        // Create table data element
        var thEl = document.createElement('th');
        thEl.textContent = hours[j];
    
        trEl.append(thEl)

    }
    var totalSalesTdEl = document.createElement('td');
    totalSalesTdEl.textContent = 'Total Per Day';
    trEl.append(totalSalesTdEl);
  
    tableEl.append(trEl);

    for (var i in allStores) {
        allStores[i].render();
    }
};

// Create a table to total sales for each hour
function totalSalesPerHour() {
    // Clear previous
    totalsTable.innerHTML= '';
    // Link to DOM
    var tableEl = document.getElementById('totalsTable');;
    // Create elements
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    // Label
    tdEl.textContent = 'Hourly Totals';
    trEl.append(tdEl);
    // For loop to add cookies
    for(var i in hours) {
        tdEl = document.createElement('td');
        // Set an initial value
        var totalValue;
        console.log(totalValue);             
        // Add by store
        for(var j in hours) {
            totalValue += avgCookiesPerHour[i];
        } 
        console.log(totalValue);
        tdEl.textContent = this.totalValue;
        
        trEl.append(tdEl);
    }

    // Create a final total
    tdEl = document.createElement('td');
    var totalValue;
    for(var j in allStores) {
        totalValue += this.totalSalesTdEl;
    }
    tdEl.textContent = this.totalValue;
    trEl.append(tdEl);
    tableEl.append(trEl);
};

// Create instances for each store
var pikePlaceMarket = new Store('First and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store ('Seattle Center', 11, 38, 3.7);
var capHill = new Store ('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

// Render the table
renderAllStores();
totalSalesPerHour();


// Random num gen global function
function randomNumGen (min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min) + 1 + min);
}

// Create submit handler
function handleSubmitNewData(event) {
    event.preventDefault();

    // Clear the table
    var addLocation = event.target.location.value
    var addMinCust = event.target.minCust.value
    var addMaxCust = event.target.maxCust.value 
    var addAvgCookies = event.target.avgCookiesCust.value 

    // Input data into new object
    var newStore = new Store (addLocation, addMinCust, addMaxCust, addAvgCookies);
        
    // Clear the form
    event.target.location.value = null;
    event.target.minCust.value = null;
    event.target.maxCust.value = null;
    event.target.avgCookiesCust.value = null;

    // Render data
    renderAllStores();totalSalesPerHour();
}

// Create event listener for submit button
newStoreForm.addEventListener('submit', handleSubmitNewData);

