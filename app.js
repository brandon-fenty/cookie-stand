'use strict';

// Create an array for shop hours
var hours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];
// Declare global variable for form
var newStoreForm = document.getElementById('newStoreForm');

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
    // Clear old table for newly rendered table
    cookieSales.innerHTML = '';
    // Link table to HTML
    var tableEl = document.getElementById('cookieSales');
    // Create table row element
    var trEl = document.createElement('tr');
    // create column for locations
    var storeFrontTdEl = document.createElement('td');
    // Create table row element
    storeFrontTdEl.textContent = 'Store Location';
    trEl.append(storeFrontTdEl);


    // Create table header
    for(var j in hours) {
        // Create table data element
        var tdEl = document.createElement('td');
        tdEl.textContent = hours[j];
    
        trEl.append(tdEl)
    }
    var totalSalesTdEl = document.createElement('td');
    totalSalesTdEl.textContent = 'Total cookies sold';
    trEl.append(totalSalesTdEl);
  
    tableEl.append(trEl);

    for (var i in allStores) {
        allStores[i].render();
    }
};

// // Function call
renderAllStores();

// Random num gen global function
function randomNumGen (min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min) + 1 + min);
}

// Create submit handler
function handleSubmitNewData(event) {
    event.preventDefault();
    // Prevent from proceeding without all data filled
    if (!event.target.location.value || !event.target.minCust.value || !event.target.maxCust.value || !event.target.avgCookiesCust.value) {
        return alert('Please complete the form.')
    }
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
    renderAllStores();
}

// Create event listener for submit button
console.log(newStoreForm);
newStoreForm.addEventListener('submit', handleSubmitNewData);

