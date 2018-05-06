
function showDate(){
    var date = new Date(99, 06, 11, 12, 32, 23, 23);
    document.getElementById('show').innerHTML = date.toDateString();
}

function changeP(){
    document.getElementById('change').innerHTML = "JavaScript is awesome!!!";
}
