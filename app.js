var date=new Date();
var daysInWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var day=date.getDay();
var today=daysInWeek[day];
var hours=date.getHours();
var minutes=date.getMinutes();

document.getElementById("dateAndTime").innerText ='${today} ${hours}:${minutes}';

var weatherInCities=[
    {city:"Hyderabad,Telangana",climateCondition:"sunny",temperature:45,lattitude:17.385(north),longitude:78.4867(south)},
    {city:"Bhopal,MadhyaPradesh",climateCondition:"sunny",temperature:40,lattitude:19.285(north),longitude:76.4867(south)},
    {city:"Imphal,Manipur",climateCondition:"cloudy",temperature:15,lattitude:12.385 (north),longitude:79.4867(south)},
    {city:"Agarthala,Tripura",climateCondition:"Rainy",temperature:22,lattitude:15.385(north),longitude:80.4867(south)},
    {city:"Kohima,Nagaland",climateCondition:"Humid",temperature:21,lattitude:9.385(north),longitude:75.4867(south)}
]
function getWeather(){
    var list=document.getElementById("list")
    var selectedCityFromList=list.options[list.selectedIndex].value;
    var weatherInSelectedCity=weatherInCities.find(e=>{
        return e.city==selectedCityFromList
    })
    document.getElementById("climate").innerText=weatherInSelectedCity.climateCondition;
    document.getElementById("temp").innerText=weatherInSelectedCity.temperature;
    document.getElementById("longitude").innerText=weatherInSelectedCity.longitude;
    document.getElementById("lattitude").innerText=weatherInSelectedCity.lattitude;
     document.getElementById("city").innerText=selectedCityFromList;
}
function getFahrenheit(){
    var list=document.getElementById("list");
    var selectedCityFromList=list.options[list.selectedIndex].value;
    var weatherInSelectedCity=weatherInCities.find(e=>{
        return e.city==selectedCityFromList
})
document.getElementById("temp").innerText=(weatherInSelectedCity.temperature*9/5)-32;
}
function getCelsius(){
    var list=document.getElementById("list");
    var selectedCityFromList=list.options[list.selectedIndex].value;
    var weatherInSelectedCity=weatherInCities.find(e=>{
        return e.city==selectedCityFromList
})
document.getElementById("temp").innerText=weatherInSelectedCity.temperature;
}