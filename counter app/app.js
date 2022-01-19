//document.getElementById("count").innerText = 5;

let count = 0;
let saveEl = document.getElementById("save-el")

document.getElementById("increment-btn").addEventListener("click", function () {
    count++;
    document.getElementById("count").textContent = count;
})
document.getElementById("decrement-btn").addEventListener("click", function () {
    count--;
    document.getElementById("count").textContent = count;
})
document.getElementById("save-btn").addEventListener("click", function () {
    let a = count + " - "
    saveEl.textContent += a;
    count = 0;
    document.getElementById("count").textContent = count;
})



