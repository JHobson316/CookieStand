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
            let customersPerHour = this.customersPerHour.push(Math.floor(Math.random(this.minCust - this.minCust + 1)+this.maxCust));
        }
        console.log(this.customersPerHour);
    },
    calCookiesPerHour: function(){
        for (i=0; i<hours.length; i++){
            let oneHour = Math.ceil(this.customersPerHour[i] * this.avgeCookie);
            this.totalDailyCookies += oneHour;
            this.cookiesPerHour.push(oneHour)
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
            this.customersPerHour.push(Math.floor(Math.random(this.minCust - this.maxCust + 1)*this.minCust));
        }
        console.log(this.customersPerHour);
    },
    calCookiesPerHourS: function(){
        for (i=0; i<hours.length; i++){
            let oneHour = Math.ceil(this.customersPerHour[i] * this.avgeCookie);
            this.totalDailyCookies += oneHour;
            this.cookiesPerHour.push(oneHour)
        }
    }
}
let FlorenceItaly = {
    maxCust: 76,
    minCust: 16,
    avrgCookie: 6.3,
    customersPerHour:[],
    cookiesPerHour:[],
    totalDailyCookies:0,
    CalCustomersPerHour: function(){
        for (i = 0; i < hours.length; i++){
            this.customersPerHour.push(Math.floor(Math.random(this.minCust - this.maxCust + 1)*this.minCust));
        }
        console.log(this.customersPerHour);
    },
    calCookiesPerHour: function(){
        for (i=0; i<this.customersPerHour.length; i++){
            let oneHour = Math.ceil(this.customersPerHour[i] * this.avgeCookie);
            this.totalDailyCookies += oneHour;
            this.cookiesPerHour.push(oneHour)
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
            this.customersPerHour.push(Math.floor(Math.random(this.minCust - this.maxCust + 1)*this.minCust));
        }
        console.log(this.customersPerHour);
    },
    calCookiesPerHour: function(){
        for (i=0; i<this.customersPerHour.length; i++){
            let oneHour = Math.ceil(this.customersPerHour[i] * this.avgeCookie);
            this.totalDailyCookies += oneHour;
            this.cookiesPerHour.push(oneHour)
        }
}
}
let TokyoJapan = {
    maxCust: Math.floor(Math.random()*100)+1,
    minCust: Math.ceil(Math.random()*2),
    avrgCookie: 6.3,
    customersPerHour:[],
    cookiesPerHour:[],
    totalDailyCookies:0,
    CalCustomersPerHour: function(){
        for (i = 0; i < hours.length; i++){
            this.customersPerHour.push(Math.floor(Math.random(this.minCust - this.maxCust + 1)*this.minCust));
        }
        return(this.customersPerHour);
    },
    calCookiesPerHour: function(){
        for (i=0; i<this.customersPerHour.length; i++){
            let oneHour = Math.ceil(this.customersPerHour[i] * this.avgeCookie);
            this.totalDailyCookies += oneHour;
            this.cookiesPerHour.push(oneHour)
        }
        return(this.cookiesPerHour);
    }
}
let salesTable = document.getElementById("sales-table")
let tableHeaderEl = document.createElement('th');
let tableHeaderContainer = document.createElement('thead');
let tableRow = document.createElement('tr');
let tablefooter = document.createElement('tfoot')
function renderTableHeader(){
    for (i=0; i<hoursOpen.length;i++){
        let tableHeaderEl = document.createElement('th');
        tableHeaderEl.textContent = `${hoursOpen[i]}`;
        tableRow.append(tableHeaderEl);
    }
    tableHeaderContainer.append(tableRow);
}
function renderTableFooter(){
    for (i=0; i < hours.length + 1; i++ );
}
//let ul1 = document.createElement('ul');
//let ul2 = document.createElement('ul');
//let ul3 = document.createElement('ul');
//let ul4 = document.createElement('ul');
//let ul5 = document.createElement('ul');
let cookieContainer1 = document.getElementById('cookies-sold-seattle');
let cookieContainer2 = document.getElementById('cookies-sold-toledo');
let cookieContainer3 = document.getElementById('cookies-sold-florence');
let cookieContainer4 = document.getElementById('cookies-sold-milan');
let cookieContainer5 = document.getElementById('cookies-sold-tokyo');
function renderSeattle(hours){
    for (i=0; i < hours.length; i=i+1){
        let li = document.createElement('li');
        li.textContent = `${hours[i]} : ${SeattleWashington.customersPerHour[i]}`;
        ul1.append(li);
}
cookieContainer1.append(ul1);
}
function renderToledo(hours){
    for (i=0; i < hours.length; i=i+1){
        let li = document.createElement('li');
        li.textContent = `${hours[i]} : ${ToledoOhio.customersPerHour[i]}`;
        ul2.append(li);
}
cookieContainer2.append(ul2);
}
function renderFlorence(hours){
    for (i=0; i < hours.length; i=i+1){
        let li = document.createElement('li');
        li.textContent = `${hours[i]} : ${FlorenceItaly.customersPerHour[i]}`;
        ul3.append(li);
}
cookieContainer3.append(ul3);
}
function renderMilan(hours){
    for (i=0; i < hours.length; i=i+1){
        let li = document.createElement('li');
        li.textContent = `${hours[i]} : ${MilanItaly.customersPerHour[i]}`;
        ul4.append(li);
}
cookieContainer4.append(ul4);
}
function renderTokyo(hours){
    for (i=0; i < hours.length; i=i+1){
        let li = document.createElement('li');
        li.textContent = `${hours[i]} : ${TokyoJapan.customersPerHour[i]}`;
        ul5.append(li);
}
cookieContainer5.append(ul5);
}
//renderSeattle(hoursOpen);
//renderToledo(hoursOpen);
//renderFlorence(hoursOpen);
//renderMilan(hoursOpen);
//renderTokyo(hoursOpen);
renderTableHeader();