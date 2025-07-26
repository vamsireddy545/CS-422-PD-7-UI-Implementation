let count = 1

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

function incrementCount() {
    count++
    document.getElementById("count").innerHTML = count;
    document.getElementById("subtotal").innerHTML = "Subtotal: " + formatter.format(5 * count);
    document.getElementById("tax").innerHTML = "Tax: " + formatter.format((5 * count) * 0.0625);
    document.getElementById("total").innerHTML = "Total: " + formatter.format((5 * count) + 2 + ((5 * count) * 0.0625));
}

function decrementCount() {
    if (count > 0) {
        count--;
        document.getElementById("count").innerHTML = count;
        document.getElementById("subtotal").innerHTML = "Subtotal: " + formatter.format(5 * count);
        document.getElementById("tax").innerHTML = "Tax: " + formatter.format((5 * count) * 0.0625);
        document.getElementById("total").innerHTML = "Total: " + formatter.format((5 * count) + 2 + ((5 * count) * 0.0625));
    }
    if (count == 0) {
        document.getElementById("item-frame").innerHTML = "Cart is Empty";
        document.getElementById("item-frame").style.color = "#dbd3d8";
        document.getElementById("summary").innerHTML = "Add items to Cart to Check Out";
    }
}

function removeItem() {
    count = 0;
    document.getElementById("item-frame").innerHTML = "Cart is Empty";
    document.getElementById("item-frame").style.color = "#dbd3d8";
}

function checkOut() {
    localStorage.setItem('count', count);
    window.location.href = "CheckOut.html";
}