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

// dropdown
function toggleDropdown_1() {
  let dropdown = document.getElementById("dropdown_1");
  if (dropdown.classList.contains("d-none")) {
    dropdown.classList.remove("d-none");
  } else {
    dropdown.classList.add("d-none");
  }
}

function toggleDropdown_2() {
  let dropdown = document.getElementById("dropdown_2");
  if (dropdown.classList.contains("d-none")) {
    dropdown.classList.remove("d-none");
  } else {
    dropdown.classList.add("d-none");
  }
}
