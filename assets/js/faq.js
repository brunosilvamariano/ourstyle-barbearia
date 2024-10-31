document.addEventListener("DOMContentLoaded", function () {
    const prices = document.querySelectorAll(".price-3d");
    prices.forEach((price) => {
        price.style.transition = "transform 0.3s";
        price.addEventListener("mouseenter", () => {
            price.style.transform = "scale(1.1)";
        });
        price.addEventListener("mouseleave", () => {
            price.style.transform = "scale(1)";
        });
    });
});
