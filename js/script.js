var search = document.querySelector(".search-btn");
var form = document.querySelector(".hotel-form");

var arriveDate = form.querySelector("[name=arrive-date]");
var departDate = form.querySelector("[name=depart-date]");
var adultCount = form.querySelector("[name=adult-count]");
var childCount = form.querySelector("[name=child-count]");

var adultMinus = form.querySelector(".minus-btn.adult-btn");
var adultPlus = form.querySelector(".plus-btn.adult-btn");
var childMinus = form.querySelector(".minus-btn.child-btn");
var childPlus = form.querySelector(".plus-btn.child-btn");

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

adultMinus.addEventListener("click", function (evt) {
  if (!adultCount.value) {
    adultCount.value = 0;
  } else if (adultCount.value > 0) {
    adultCount.value = parseInt(adultCount.value) - 1;
  }
});

adultPlus.addEventListener("click", function (evt) {
  if (!adultCount.value) {
    adultCount.value = 0;
    adultCount.value = parseInt(adultCount.value) + 1;
  } else {
    adultCount.value = parseInt(adultCount.value) + 1;
  }
});

childMinus.addEventListener("click", function (evt) {
  if (!childCount.value) {
    childCount.value = 0;
  } else if (childCount.value > 0) {
    childCount.value = parseInt(childCount.value) - 1;
  }
});

childPlus.addEventListener("click", function (evt) {
  if (!childCount.value) {
    childCount.value = 0;
    childCount.value = parseInt(childCount.value) + 1;
  } else {
    childCount.value = parseInt(childCount.value) + 1;
  }
});
