'use strict';

var timeArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = 
        {
        minCustomers: 23,
        maxCustomers: 65,
        avgCookie: 6.3,

        randomNumGen: function() {
              
            return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
        },             
            
        custPerHr: [],

        avgCust: function() {
            for(var i = 0; i < timeArr.length; i++) {
                
                this.custPerHr[i] = this.randomNumGen();
                return this.custPerHr;

            }
        },

        cookiesPerHr: [],
        
        avgCookiesHr: function() {
            this.avgCust();
            
            for(var i = 0; i < timeArr.length; i++) {
                this.cookiesPerHr[i] = this.avgCookie * this.custPerHr[i];
                return this.cookiesPerHr;
            }
        },

        renderAverage: function() {
            this.avgCookiesHr();

            for(var i = 0; i < timeArr.length; i++) {
                var list = document.getElementById('firstPike');
                var newLi = document.createElement('li');
                list.appendChild (newLi);
                document.write('' + timeArr + ': ' + this.avgCust + ' customers - ' + this.avgCookiesHr + ' cookies sold.');
            }
        }

}
