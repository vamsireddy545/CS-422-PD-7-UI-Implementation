var count = 1;
function incrementCount() {
    count++
    document.getElementById("count").innerHTML = count;
}

function decrementCount() {
    if (count > 0) {
        count--;
        document.getElementById("count").innerHTML = count;
    }
}