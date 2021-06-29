const search = document.querySelector(".search-btn");
const mapImg = document.querySelector(".map-img");

if (mapImg) {
    mapImg.classList.add("map-img-close");
}

if (search) {
    const form = document.querySelector(".hotel-form");
    const arriveDate = form.querySelector("[name=arrive-date]");
    const departDate = form.querySelector("[name=depart-date]");
    const adultCount = form.querySelector("[name=adult-count]");
    const childCount = form.querySelector("[name=child-count]");
    form.classList.add("hotel-form-close")
    search.addEventListener("click", function (evt) {
        evt.preventDefault();
        form.classList.toggle("hotel-form-open");
    });
}

form.addEventListener("submit", function (evt) {
    if (!arriveDate.value || !departDate.value || !adultCount.value || !childCount.value) {
        evt.preventDefault();
        form.classList.add("modal-error");
        if (!arriveDate.value) {
            arriveDate.focus();
        } else if (!departDate.value) {
            departDate.focus();
        } else if (!adultCount.value) {
            adultCount.focus();
        } else if (!childCount.value) {
            childCount.focus();
        }
    } else {
        localStorage.setItem("adultCount", adultCount.value);
        localStorage.setItem("childCount", childCount.value);
    }
});
