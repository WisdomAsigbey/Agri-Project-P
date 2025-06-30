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

// Customer
var customerRole = "Agent";
var customerCountry = "Ghana";
class Customer {
  constructor(firstName, lastName, address, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.email = email;
  }
  country = customerCountry;
  role = customerRole;
  message(name) {
    this.lastName = name;
    console.log(
      `Hello ${this.firstName}, you're welcome to the Agri-Extension site. Check our services by clicking on services`
    );
  }
}
// const bernard = new Customer("Bernard");
// bernard.message("Dogah");
// console.log(bernard.role);
// console.log(bernard.country);
