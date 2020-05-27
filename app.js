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
    z=document.getElementById("te").innerText = citytemp[val]+" "+"C";
    switch (val) {
        case 0:
            document.getElementById("clmde").innerText = "sunny";
            z;
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