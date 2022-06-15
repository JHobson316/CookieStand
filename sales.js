// Stores the min/max hourly customers, and the average cookies per customer, in object properties
// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like this:
const hoursOpen = ["7am", "8am", "9am", "10am", "11am", "2am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
function storeLocation(maxCust, minCust, avrgCookie, cookiesPerHour, customersPerHour, totalDailyCookies){
    this.maxCust = maxCust;
    this.minCust = minCust;
    this.cookiesPerHour = cookiesPerHour;
    this.customersPerHour = customersPerHour;
    this.avrgCookie= avrgCookie;
    this.totalDailyCookies = totalDailyCookies;
    this.CalCustomersPerHour = function(){
        for (i = 0; i < hours.length; i++){
            let customersPerHour = this.customersPerHour.push(Math.floor(Math.random(this.minCust - this.minCust + 1)+this.maxCust));
        }
    }
    this.calCustomersPerHour = function(){
        for (i=0; i<hours.length; i++){
            let oneHour = Math.ceil(this.customersPerHour[i] * this.avgeCookie);
            this.totalDailyCookies += oneHour;
            this.cookiesPerHour.push(oneHour)
        }
    }
}
let SeattleWashington = new Location(85,15,6.9,[],[]);
let ToledoOhio = new Location(85,15,6.9,[],[]);
let FlorenceItaly = new Location(85,15,6.9,[],[]);
let MilanItaly = new Location(85,15,6.9,[],[]);
let TokyoJapan = new Location(85,15,6.9,[],[]);
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
let cookieContainer = document.getElementById('cookies-sold');
function render(hours){
    for (i=0; i < hoursOpen.length; i=i+1){
        let th = document.createElement('th');
        th.textContent = `${hours[i]}`;
        cookieContainer.append(th);
}
}
cookieContainer.append();

//renderSeattle(hoursOpen);
//renderToledo(hoursOpen);
//renderFlorence(hoursOpen);
//renderMilan(hoursOpen);
//renderTokyo(hoursOpen);
render();