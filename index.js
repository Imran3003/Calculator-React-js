var inp = document.getElementById("inp");

var add = document.getElementById("add");
var sub = document.getElementById("sub");
var mul = document.getElementById("mul");
var div = document.getElementById("div");
var mod = document.getElementById("mod");
var dot = document.getElementById("dot");

function displayadd() {
    inp.value += add.innerText;
}
function displaysub() {
    inp.value += sub.innerText;
}
function displaymul() {
    inp.value += mul.innerText;
}
function displaydiv() {
    inp.value += div.innerText;
}
function displaymod() {
    inp.value += mod.innerText;
}
function displaydot() {
    inp.value += dot.innerText;
}

function display(num) {
    inp.value += num;
}

function clr() {
    inp.value = "";
}
function del() {
    inp.value = inp.value.slice(0, -1);
}
function ans() {
    try {
        inp.value = eval(inp.value)

    }
    catch {
        alert("INVALID")
    }
}