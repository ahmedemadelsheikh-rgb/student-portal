const servicesToggle = document.getElementById("servicesToggle");
const submenu = document.getElementById("submenu");
const arrow = document.getElementById("arrow");

const semesterBtn = document.getElementById("semesterBtn");

const homePage = document.getElementById("homePage");
const semesterPage = document.getElementById("semesterPage");

const result = document.getElementById("result");
const goBtn = document.getElementById("goBtn");

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");


/* Mobile menu */

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});


/* My E-Services */

servicesToggle.addEventListener("click", () => {

  submenu.classList.toggle("hidden");

  if (submenu.classList.contains("hidden")) {
    arrow.textContent = "›";
  } else {
    arrow.textContent = "⌄";
  }

});


/* Semester Result */

semesterBtn.addEventListener("click", () => {

  homePage.classList.add("hidden");

  semesterPage.classList.remove("hidden");

  submenu.classList.add("hidden");

  arrow.textContent = "›";

  sidebar.classList.remove("open");

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});


/* Go Button */

goBtn.addEventListener("click", () => {

  result.classList.remove("hidden");

  result.scrollIntoView({
    behavior:"smooth"
  });

});
