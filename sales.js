// Stores the min/max hourly customers, and the average cookies per customer, in object properties
// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like this:
let cookieContainer = document.getElementById('sales-table');
let tableBody = document.createElement('tbody');
cookieContainer.append(tableBody);

const hoursOpen = ["7am", "8am", "9am", "10am", "11am", "2am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
function Location(maxCust, minCust, avrgCookie){
    this.maxCust = maxCust;
    this.minCust = minCust;
    this.cookiesPerHour = [];
    this.customersPerHour = [];
    this.avrgCookie = avrgCookie;
    this.totalDailyCookies = 0;
    this.calCustomersPerHour = function(){
        for (let i = 0; i < hoursOpen.length; i++){
            let customerPerHour = hoursOpen[i];
            let randomCustomer = Math.floor(Math.random(this.maxCust - this.minCust + 1)*this.maxCust);
            this.customersPerHour.push(randomCustomer);
        }
    }
    this.calCookiesPerHour = function(){
        for (let i = 0; i<hoursOpen.length; i++){
            let oneHour = Math.ceil(this.customersPerHour[i] * this.avrgCookie);
            this.totalDailyCookies += oneHour;
            this.cookiesPerHour.push(oneHour);
        }
    }
    this.RenderLoc = function(){
        let tableRow = document.createElement('tr');
        let tableData = document.createElement('td');
        tableData.textContent = `${this.name}`;
        tableRow.append(tableData);
    }

}
let SeattleWashington = new Location(85,15,6.9);
SeattleWashington.calCustomersPerHour();
SeattleWashington.calCookiesPerHour();
SeattleWashington.RenderLoc();
let ToledoOhio = new Location(85,15,6.9);
let FlorenceItaly = new Location(85,15,6.9);
let MilanItaly = new Location(85,15,6.9);
let TokyoJapan = new Location(85,15,6.9);
let salesTable = document.getElementById("sales-table");
let tableHeaderEl = document.createElement('th');
let tableHeaderContainer = document.createElement('thead');

function renderTableHeader(){
    for (let i=0; i<hoursOpen.length;i++){
        let tableHeaderEl = document.createElement('th');
        let tableRow = document.createElement('tr');
        tableHeaderEl.textContent = `${hoursOpen[i]}`;
        tableRow.append(tableHeaderEl);
        tableHeaderContainer.append(tableRow);
    }
}
function renderTableFooter(){
    for (i=0; i < hoursOpen.length + 1; i++ ){
        let tablefooter = document.createElement('tfoot');
        tablefooter.textContent = `${this.totalDailyCookies}`;
        let tableRow = document.createElement('tr');
        tableRow.append(tablefooter);
    }

}
//let ul1 = document.createElement('ul');
//let ul2 = document.createElement('ul');
//let ul3 = document.createElement('ul');
//let ul4 = document.createElement('ul');
//let ul5 = document.createElement('ul');



//renderSeattle(hoursOpen);
//renderToledo(hoursOpen);
//renderFlorence(hoursOpen);
//renderMilan(hoursOpen);
//renderTokyo(hoursOpen);
console.log(Location);
renderTableHeader();