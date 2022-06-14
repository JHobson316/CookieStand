// Stores the min/max hourly customers, and the average cookies per customer, in object properties
// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like this:
const hoursOpen = ["7am", "8am", "9am", "10am", "11am", "2am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let SeattleWashington = {
    maxCust: 65,
    minCust: 12,
    avrgCookie: 6.3,
    customersPerHour:[],
    cookiesPerHour:[],
    totalDailyCookies:0,
    CalCustomersPerHour: function(){
        for (i = 0; i < hours.length; i++){
        this.customersPerHour.push(math.floor(Math.random(this.maxCust - this.minCust + 1)*this.minCust));
        }
        console.log(this.customersPerHour);
    },
    calCookiesPerHour: function(){
        for (i=0; i<hours.length; i++){
            this.cookiesPerHour
        }
    }
}
let ToledoOhio = {
    maxCust: 65,
    minCust: 12,
    avrgCookie: 6.3,
    customersPerHour:[],
    cookiesPerHour:[],
    totalDailyCookies:0,
    calCustomersPerHourS: function(){
        for (i = 0; i < hours.length; i++){
        this.customersPerHour.push(math.floor(Math.random(this.maxCust - this.minCust + 1)*this.minCust));
        }
        console.log(this.customersPerHour);
    },
    calCookiesPerHourS: function(){
        for (i=0; i<hours.length; i++){
        }
    }
}
let FlorenceItaly = {
    maxCust: 76,
    minCust: 16(),
    avrgCookie: 6.3,
    customersPerHour:[],
    cookiesPerHour:[],
    totalDailyCookies:0,
    CalCustomersPerHour: function(){
        for (i = 0; i < hours.length; i++){
        this.customersPerHour.push(math.floor(Math.random(this.maxCust - this.minCust + 1)*this.minCust));
        }
        console.log(this.customersPerHour);
    },
    calCookiesPerHour: function(){
        for (i=0; i<hours.length; i++){

    }
}
}
let MilanItaly = {
    maxCust: 58,
    minCust: 5,
    avrgCookie: 6.3,
    customersPerHour:[],
    cookiesPerHour:[],
    totalDailyCookies:0,
    CalCustomersPerHour: function(){
        for (i = 0; i < hours.length; i++){
        this.customersPerHour.push(math.floor(Math.random(this.maxCust - this.minCust + 1)*this.minCust));
        }
        console.log(this.customersPerHour);
    },
    calCookiesPerHour: function(){
        for (i=0; i<hours.length; i++){
        }
}
}
let TokyoJapan = {
    maxCust: 84,
    minCust: 3,
    avrgCookie: 6.3,
    customersPerHour:[],
    cookiesPerHour:[],
    totalDailyCookies:0,
    CalCustomersPerHour: function(){
        for (i = 0; i < hours.length; i++){
        this.customersPerHour.push(math.floor(Math.random(this.maxCust - this.minCust + 1)*this.minCust));
        }
        return(this.customersPerHour);
    },
    calCookiesPerHour: function(){
        for (i=0; i<hours.length; i++){
            this.cookiesPerHour.push()
        }
        return(this.cookiesPerHour);
    }
}
let ul = document.createElement('ul');
let cookieContainer1 = document.getElementById('cookies-sold-seattle');
let cookieContainer2 = document.getElementById('cookies-sold-toledo');
let cookieContainer3 = document.getElementById('cookies-sold-florence');
let cookieContainer4 = document.getElementById('cookies-sold-milan');
let cookieContainer5 = document.getElementById('cookies-sold-tokyo');
function render(hours){
    for (i=0; i < hours.length; i=i+1){
        let li = document.createElement('li');
        li.textContent = `${hours[i]} : # of cookies`;
        ul.append(li);
}
cookieContainer1.append(ul);
}
render(hoursOpen);