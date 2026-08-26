const toggle = document.getElementById("servicesToggle");
const submenu = document.getElementById("submenu");
const arrow = document.getElementById("arrow");

const semester = document.getElementById("semesterBtn");
const semesterPage = document.getElementById("semesterPage");

const result = document.getElementById("result");
const go = document.getElementById("goBtn");


// My E-Services
toggle.addEventListener("click", () => {

  submenu.classList.toggle("hidden");

  if (submenu.classList.contains("hidden")) {
    arrow.textContent = "›";
  } else {
    arrow.textContent = "⌄";
  }

});


// Semester Result
semester.addEventListener("click", () => {

  semesterPage.classList.remove("hidden");

  semesterPage.scrollIntoView({
    behavior: "smooth"
  });

});


// Go button
go.addEventListener("click", () => {

  result.classList.remove("hidden");

  go.textContent = "Go";

});
