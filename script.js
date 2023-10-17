let start = document.getElementById("btn");

start.addEventListener("click", function () {
    // Отримуємо посилання на таблицю
    let table = document.querySelector("table");

    // Отримуємо всі заголовки таблиці (thead, tbody, tfoot)
    let head = table.querySelectorAll("thead td");
    let body = table.querySelectorAll("tbody");
    let foot = table.querySelectorAll("tfoot td");

    for(i=0; i<3; i++){
        head[i].style.height = "80px";
        if (body[i]){
            body[i].remove();
        }
        head[i].innerText = document.getElementById(`title${i+1}`).textContent;
        head[i].style.fontWeight = "bold"
        foot[i].innerText = document.getElementById(`text${i+1}`).textContent;
        document.getElementById(`title${i+1}`).innerHTML = "";
        document.getElementById(`text${i+1}`).innerHTML = "";
    }
    start.remove()
});
