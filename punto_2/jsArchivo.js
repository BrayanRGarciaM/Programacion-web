document.getElementById("firstChoice").multiple = true;
document.getElementById("secondChoice").multiple = true;
function passOneToDer() {
    let e = document.getElementById("firstChoice");
    let auxe = document.getElementById("secondChoice");
    for (let index = 0; index < e.length; index++) {
        if (e.options[index].selected == true) {
            auxe.appendChild(e.options[index]);
            index--;
        }
    }
}
function passOneToIzq() {
    let e = document.getElementById("secondChoice");
    let auxe = document.getElementById("firstChoice");
    for (let index = 0; index < e.length; index++) {
        if (e.options[index].selected == true) {
            auxe.appendChild(e.options[index]);
            index--;
        }
    }

}
function passAllToDer() {
    let e = document.getElementById("firstChoice");
    let auxe = document.getElementById("secondChoice");
    for (let index = 0; index < e.length; index++) {
        auxe.appendChild(e.options[index]);
        index--;
    }
}
function passAllToIzq() {
    let e = document.getElementById("secondChoice");
    let auxe = document.getElementById("firstChoice");
    for (let index = 0; index < e.length; index++) {
        auxe.appendChild(e.options[index]);
        index--;
    }
}
