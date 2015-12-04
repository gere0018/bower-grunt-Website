document.addEventListener("DOMContentLoaded", init);

function init( ){
    button = document.querySelector("#btn");
    button.addEventListener("click", fetchData);
}
function fetchData(){
    alert("This will take you somewhere nice");
}