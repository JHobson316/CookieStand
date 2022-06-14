const hoursOpen = ["7am", "8am", "9am", "10am", "11am", "2am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]
let Seattle = {
    maxCust: 65,
    minCust: 23,
    avrgCookie: 6.3,
    customersPerHour:[],
    cookiesPerHour:[],
    totalDailyCookies:0,
    calCustomersPerHour: function(){
        for (i = 0; i < hours.length; i++){
        this.customersPerHour.push(math.floor(Math.random(this.maxCust - this.minCust + 1)*this.minCust));
        }
        console.log(this.customersPerHour);
    },
    calCookiesPerHour: function(){

    }
}


let cookieContainer = document.getElementById();
let ul = document.createElement('ul');
function render(hours){
    for (i=0; i<hours.length; i++){
        let li = document.createElement('li');
        li.textContent = `${hours[i]} : Cookies go here`; // 
        ul.append(li); // appending list yo ul
    }
    cookieContainer.append(ul); // adding ul to div
}
render(hours);