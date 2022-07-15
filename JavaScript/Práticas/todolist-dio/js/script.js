const addTask = document.querySelector("#addTask");
const list = document.querySelector("#list");
const msgAlert = document.querySelector("#msg");
const btnCheck = document.querySelector("#check");

// função executada quando você clica no botão para adicionar task
addTask.addEventListener("click", function () {
    // 1° pega o que foi inserido no input
    var task = document.querySelector("#inputTask").value;

    // funções de verificação de validade
    if (campoVazio(task) == true) {
        msgAlert.style.visibility = "visible";
    } else {
        msgAlert.style.visibility = "hidden";
        // logo depois adiciona o item na lista
        list.insertAdjacentHTML("afterbegin", `
    <div id="task" class="item">
    <input type="checkbox">
    <span class="itemcheckbox">${task}</span>
    </div>`);
    }

    document.querySelector("#inputTask").value = "";
})

function campoVazio(input) {
    if (input == "" || input === NaN) {
        return true;
    } else {
        return false;
    }
}