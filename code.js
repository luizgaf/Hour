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
        intervalId = setInterval(() => gmtTime(i), 10);
}
