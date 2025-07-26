const count = localStorage.getItem('count');

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

document.getElementById("subtotal").innerHTML = "Subtotal: " + formatter.format(5 * count);
document.getElementById("tax").innerHTML = "Tax: " + formatter.format((5 * count) * 0.0625);
document.getElementById("total").innerHTML = "Total: " + formatter.format((5 * count) + 2 + ((5 * count) * 0.0625));