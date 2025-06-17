const navToggler = document.querySelector(".navbar-toggler");
const navbarBrand = document.querySelector(".navbar-brand");
const closeBtn = document.querySelector(".btn-close");
const dropdownBtn = document.querySelectorAll(".dropdown_btn");

// toggle dropdown
dropdownBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const btnTarget = button.getAttribute("data-bs-target");
    const dropdown = document.getElementById(btnTarget);
    if (dropdown.classList.contains("d-none")) {
      dropdown.classList.remove("d-none");
    } else {
      dropdown.classList.add("d-none");
    }
  });
});

// hide dropdown when other button or screen is clicked
document.addEventListener("click", function (event) {
  let dropdown = document.getElementById("dropdown_1");
  let button = document.getElementById("btn_1");

  // Check if the clicked element is NOT the dropdown or the button
  if (!dropdown.contains(event.target) && !button.contains(event.target)) {
    dropdown.classList.add("d-none");
  }
});
document.addEventListener("click", function (event) {
  let dropdown = document.getElementById("dropdown_2");
  let button = document.getElementById("btn_2");

  // Check if the clicked element is NOT the dropdown or the button
  if (!dropdown.contains(event.target) && !button.contains(event.target)) {
    dropdown.classList.add("d-none");
  }
});
document.addEventListener("click", function (event) {
  let dropdown = document.getElementById("dropdown_3");
  let button = document.getElementById("btn_3");

  // Check if the clicked element is NOT the dropdown or the button
  if (!dropdown.contains(event.target) && !button.contains(event.target)) {
    dropdown.classList.add("d-none");
  }
});

// chart
const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues = [55, 49, 44, 24, 15];
const barColors = ["red", "green", "blue", "orange", "brown"];

// chart
new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
});

// close sideBar
closeBtn.addEventListener("click", () => {
  if (navToggler) {
    navToggler.click();
  } else if (navbarBrand) {
    dataBsToggle = navbarBrand.getAttribute("data-bs-toggle");
    navbarBrand.setAttribute("data-bs-toggle", "offcanvas");
    navbarBrand.click();
    navbarBrand.setAttribute("data-bs-toggle", dataBsToggle);
  }
});
