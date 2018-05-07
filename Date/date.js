
function showDate(){
    var date = new Date();
    document.getElementById('show').innerHTML = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
}

function changeP(){
    document.getElementById('change').innerHTML = "JavaScript is awesome!!!";
}
