function colorchos(valueon, valueoff) {
    document.getElementById(valueon).style.color = "#293356"
    document.getElementById(valueoff).style.color = ""
}

document.getElementById("check").onclick = function () {
    this.firstElementChild.style.animation = "opacheck 0.3s forwards"
    setTimeout(() => {
        this.firstElementChild.style.animation = ""
    }, 500);
    let valon = "";
    let valoff = "";
    if (this.style.justifyContent == "flex-start" || this.style.justifyContent == "") {
        this.style.justifyContent = "flex-end"
        this.style.backgroundColor = "#78ebdc"
        valon = "year";
        valoff = "month";
    }
    else {
        this.style.justifyContent = "flex-start"
        this.style.backgroundColor = "#78ebdc"
        valon = "month";
        valoff = "year";
    }
    colorchos(valon, valoff)
}