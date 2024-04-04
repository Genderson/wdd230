document.addEventListener("DOMContentLoaded", function() {
    const banner = document.querySelector("#banner");
    const closeButton = document.querySelector("#mode");

    const currentDate = new Date();
    const currentDayOfWeek = currentDate.getDay();

    if (currentDayOfWeek >= 1 && currentDayOfWeek <= 3) {
        banner.classList.remove("hidden");
    }

    closeButton.addEventListener("click", function() {
        banner.classList.add("hidden");
    });
});