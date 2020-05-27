var date = new Date();
var daysinweek = ["SUNDAY", "MONDAY", "TEUSDAY", "WEDNESDAY", "THRUSDAY", "FRIDAY", "SATUREDAY"];
var day = date.getDay();
var today = daysinweek[day]
var hours = date.getHours();
var times = hours % 12;
var min = date.getMinutes();
var sec = date.getSeconds();
var ampm = hours < 12 ? "AM" : "PM";
var timezone = "GMT+05:30(Indian Standard Time)";
document.getElementById("dateandtime").innerText = today + '  ' + ' ' + times + ':' + min + ':' + sec + ampm + '  ' + '     ' + timezone;
var citytemp = [34, 30, 28, 39, 29];
function myfun() {
    var e = document.getElementById("list");
    var select = e.options[e.selectedIndex].value;
    document.getElementById("city").innerText = select;
    var citys = ["Hydrabad,Telangana", "Bhopal,MadhyaPradesh", "Impal,Manipur", "Agartala,Tripura", "Kohima,Nagaland"];
    var val = citys.indexOf(select);

    switch (val) {
        case 0:
            document.getElementById("clmde").innerText = "sunny";
            
            break;
        case 1:
            document.getElementById("clmde").innerText = "windy";
            z;
            break;
        case 2:
            document.getElementById("clmde").innerText = "cool";
            z;
            break;
        case 3:
            document.getElementById("clmde").innerText = "hot";
            z;
            break;
        case 4:
            document.getElementById("clmde").innerText = "rainy";
            z;
            break;
        default:
            document.getElementById("clmde").innerText = "select the city";
            break;

    }
}
  function  getFahrenheit(){
      
    var e = document.getElementById("list");
    var select = e.options[e.selectedIndex].value;
    document.getElementById("city").innerText = select;
    var citys = ["Hydrabad,Telangana", "Bhopal,MadhyaPradesh", "Impal,Manipur", "Agartala,Tripura", "Kohima,Nagaland"];
    var val = citys.indexOf(select);

      document.getElementById("te").innerText = (citytemp[val]*9/5)-32;
  }
  
  function  getCelsius(){

    var e = document.getElementById("list");
    var select = e.options[e.selectedIndex].value;
    document.getElementById("city").innerText = select;
    var citys = ["Hydrabad,Telangana", "Bhopal,MadhyaPradesh", "Impal,Manipur", "Agartala,Tripura", "Kohima,Nagaland"];
    var val = citys.indexOf(select);
      document.getElementById("te").innerText=citytemp[value];
  }


  }  
    