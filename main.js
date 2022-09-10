const images = [
    "/assets/images/slider-iu1.jpg",
    "/assets/images/slider-iu2.jpg",
    "/assets/images/slider-iu3.jpg",
    "/assets/images/slider-iu4.jpg"
];

var index = 0;
function change() {
    var imgElement = document.getElementById("slider-image").src = images[index]
    index > 2 ? index = 0 : index++;
    setTimeout(change, 5000);
}
window.onload = change();

// Open and close the buy tickets box
// const buyBtns = document.querySelectorAll('js-place-buy-btn')

// function showBuyTickets() {
//     modal.classlist.add("open")
// }

// for (const buyBtn of buyBtns) {
//     buyBtn.addEventListener("click", showBuyTickets)
// }