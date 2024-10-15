function gmtTime(i){
    document.getElementById("time").innerHTML = getGmtTime(i);
}

function setdate(i){
    document.getElementById("date").innerHTML = getGmtDate(i);
}

function getGmtDate(i) {
    let now = new Date();

    let gmtTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000);

    gmtTime.setHours(gmtTime.getHours() + i);

    let day = String(gmtTime.getUTCDate()).padStart(2, '0');
    let month = String(gmtTime.getUTCMonth() + 1).padStart(2, '0'); // +1 porque os meses começam em 0
    let year = gmtTime.getUTCFullYear();

    return `${day}/${month}/${year}`;
}

function getGmtTime(i){
    let now = new Date();

    let gmtTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000);

    gmtTime.setHours(gmtTime.getHours() + i);

    let hours = String(gmtTime.getHours()).padStart(2, '0');
    let minutes = String(gmtTime.getMinutes()).padStart(2, '0');
    let seconds = String(gmtTime.getSeconds()).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}


let inputValue;
function read(){
    inputValue = parseInt(document.getElementById("number").value, 10);
        return inputValue;
}


let intervalId = null;
function loop(i){
        if (intervalId !== null) {
            clearInterval(intervalId);
        }
        gmtTime(i);
        setdate(i);
        actual(i);
        showCapitals(i);
        intervalId = setInterval(() => gmtTime(i), 10);
}

function actual(i){
    if(i == 0){
        document.getElementById("actual").innerHTML = ("GMT "+ i +" Greenwich Mean Time Zone");
    }
    else{
        document.getElementById("actual").innerHTML = ("GMT "+ i);
    }
}

function showCapitals(i) {
    let capitals = "";

    if (i == -12) {
        capitals = "No permanently inhabited capital<br>";
    } else if (i == -11) {
        capitals = "Pago Pago, American Samoa<br>";
    } else if (i == -10) {
        capitals = "Honolulu, Hawaii, USA<br>";
    } else if (i == -9) {
        capitals = "Juneau, Alaska, USA<br>";
    } else if (i == -8) {
        capitals = "Los Angeles, USA<br>Vancouver, Canada<br>";
    } else if (i == -7) {
        capitals = "Denver, USA<br>Phoenix, USA<br>";
    } else if (i == -6) {
        capitals = "Mexico City, Mexico<br>Guatemala City, Guatemala<br>Tegucigalpa, Honduras<br>";
    } else if (i == -5) {
        capitals = "New York, USA<br>Bogotá, Colombia<br>Lima, Peru<br>";
    } else if (i == -4) {
        capitals = "Caracas, Venezuela<br>La Paz, Bolivia<br>Santo Domingo, Dominican Republic<br>";
    } else if (i == -3) {
        capitals = "Buenos Aires, Argentina<br>Brasilia, Brazil<br>Montevideo, Uruguay<br>";
    } else if (i == -2) {
        capitals = "Stanley, Falkland Islands<br>";
    } else if (i == -1) {
        capitals = "Praia, Cape Verde<br>";
    } else if (i == 0) {
        capitals = "London, England<br>Dakar, Senegal<br>Reykjavik, Iceland<br>";
    } else if (i == 1) {
        capitals = "Paris, France<br>Berlin, Germany<br>Rome, Italy<br>Madrid, Spain<br>";
    } else if (i == 2) {
        capitals = "Athens, Greece<br>Cairo, Egypt<br>Helsinki, Finland<br>Jerusalem, Israel<br>";
    } else if (i == 3) {
        capitals = "Moscow, Russia<br>Riyadh, Saudi Arabia<br>Nairobi, Kenya<br>";
    } else if (i == 3.5) {
        capitals = "Tehran, Iran<br>";
    } else if (i == 4) {
        capitals = "Dubai, UAE<br>Baku, Azerbaijan<br>";
    } else if (i == 4.5) {
        capitals = "Kabul, Afghanistan<br>";
    } else if (i == 5) {
        capitals = "Islamabad, Pakistan<br>Tashkent, Uzbekistan<br>";
    } else if (i == 5.5) {
        capitals = "New Delhi, India<br>Sri Jayawardenepura Kotte, Sri Lanka<br>";
    } else if (i == 5.75) {
        capitals = "Kathmandu, Nepal<br>";
    } else if (i == 6) {
        capitals = "Astana, Kazakhstan<br>Dhaka, Bangladesh<br>";
    } else if (i == 6.5) {
        capitals = "Naypyidaw, Myanmar<br>";
    } else if (i == 7) {
        capitals = "Bangkok, Thailand<br>Jakarta, Indonesia<br>";
    } else if (i == 8) {
        capitals = "Beijing, China<br>Singapore, Singapore<br>Perth, Australia<br>";
    } else if (i == 9) {
        capitals = "Tokyo, Japan<br>Seoul, South Korea<br>";
    } else if (i == 9.5) {
        capitals = "Adelaide, Australia<br>";
    } else if (i == 10) {
        capitals = "Sydney, Australia<br>Port Moresby, Papua New Guinea<br>";
    } else if (i == 11) {
        capitals = "Honiara, Solomon Islands<br>";
    } else if (i == 12) {
        capitals = "Wellington, New Zealand<br>Suva, Fiji<br>";
    } else if (i == 13) {
        capitals = "Nuku'alofa, Tonga<br>";
    } else if (i == 14) {
        capitals = "Kiritimati, Line Islands<br>";
    } else {
        capitals = "No matching GMT found<br>";
    }

    document.getElementById("capitols").innerHTML = (capitals);
}


function getGMT() {
    let offset = new Date().getTimezoneOffset();
    

    let gmt = -(offset / 60);
    
    return gmt;
}

