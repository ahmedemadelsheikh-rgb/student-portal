/* =========================
   ELEMENTS
   ========================= */

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

const servicesToggle = document.getElementById("servicesToggle");
const submenu = document.getElementById("submenu");
const arrow = document.getElementById("arrow");

const academicToggle = document.getElementById("academicToggle");
const academicSubmenu = document.getElementById("academicSubmenu");
const academicArrow = document.getElementById("academicArrow");

const reportsToggle = document.getElementById("reportsToggle");
const reportsSubmenu = document.getElementById("reportsSubmenu");
const reportsArrow = document.getElementById("reportsArrow");

const preferencesToggle = document.getElementById("preferencesToggle");
const preferencesSubmenu = document.getElementById("preferencesSubmenu");
const preferencesArrow = document.getElementById("preferencesArrow");

const semesterBtn = document.getElementById("semesterBtn");

const homePage = document.getElementById("homePage");
const semesterPage = document.getElementById("semesterPage");

const result = document.getElementById("result");
const goBtn = document.getElementById("goBtn");


/* =========================
   MOBILE MENU
   ========================= */

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});


/* =========================
   CLOSE OTHER MENUS
   ========================= */

function closeAllMenus(except) {

  const menus = [
    {
      menu: academicSubmenu,
      arrow: academicArrow
    },
    {
      menu: submenu,
      arrow: arrow
    },
    {
      menu: reportsSubmenu,
      arrow: reportsArrow
    },
    {
      menu: preferencesSubmenu,
      arrow: preferencesArrow
    }
  ];

  menus.forEach(item => {

    if (item.menu !== except) {
      item.menu.classList.add("hidden");
      item.arrow.textContent = "›";
    }

  });

}


/* =========================
   ACADEMIC AFFAIRS
   ========================= */

academicToggle.addEventListener("click", () => {

  const isHidden = academicSubmenu.classList.contains("hidden");

  closeAllMenus(academicSubmenu);

  if (isHidden) {

    academicSubmenu.classList.remove("hidden");
    academicArrow.textContent = "⌄";

  } else {

    academicSubmenu.classList.add("hidden");
    academicArrow.textContent = "›";

  }

});


/* =========================
   MY E-SERVICES
   ========================= */

servicesToggle.addEventListener("click", () => {

  const isHidden = submenu.classList.contains("hidden");

  closeAllMenus(submenu);

  if (isHidden) {

    submenu.classList.remove("hidden");
    arrow.textContent = "⌄";

  } else {

    submenu.classList.add("hidden");
    arrow.textContent = "›";

  }

});


/* =========================
   REPORTS
   ========================= */

reportsToggle.addEventListener("click", () => {

  const isHidden = reportsSubmenu.classList.contains("hidden");

  closeAllMenus(reportsSubmenu);

  if (isHidden) {

    reportsSubmenu.classList.remove("hidden");
    reportsArrow.textContent = "⌄";

  } else {

    reportsSubmenu.classList.add("hidden");
    reportsArrow.textContent = "›";

  }

});


/* =========================
   MY PREFERENCES
   ========================= */

preferencesToggle.addEventListener("click", () => {

  const isHidden = preferencesSubmenu.classList.contains("hidden");

  closeAllMenus(preferencesSubmenu);

  if (isHidden) {

    preferencesSubmenu.classList.remove("hidden");
    preferencesArrow.textContent = "⌄";

  } else {

    preferencesSubmenu.classList.add("hidden");
    preferencesArrow.textContent = "›";

  }

});


/* =========================
   SEMESTER RESULT
   ========================= */

semesterBtn.addEventListener("click", () => {

  homePage.classList.add("hidden");

  semesterPage.classList.remove("hidden");

  submenu.classList.add("hidden");

  arrow.textContent = "›";

  sidebar.classList.remove("open");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


/* =========================
   OTHER MENU OPTIONS
   ========================= */

document.getElementById("registerCourseBtn").addEventListener("click", () => {

  alert("Register/Add/Drop Course");

});


document.getElementById("registrationFormBtn").addEventListener("click", () => {

  alert("Student Registration Form");

});


document.getElementById("topLinkBtn").addEventListener("click", () => {

  alert("Top Link Preference");

});


/* =========================
   GO
   ========================= */

goBtn.addEventListener("click", () => {

  result.classList.remove("hidden");

  result.scrollIntoView({
    behavior: "smooth"
  });

});
