document.addEventListener("DOMContentLoaded", function () {

  const toggle = document.getElementById("servicesToggle");
  const submenu = document.getElementById("submenu");
  const arrow = document.getElementById("arrow");

  const semester = document.getElementById("semesterBtn");
  const semesterPage = document.getElementById("semesterPage");

  const result = document.getElementById("result");
  const go = document.getElementById("goBtn");


  // My E-Services
  toggle.addEventListener("click", function () {

    submenu.classList.toggle("hidden");

    if (submenu.classList.contains("hidden")) {
      arrow.textContent = "›";
    } else {
      arrow.textContent = "⌄";
    }

  });


  // Semester Result
  semester.addEventListener("click", function () {

    // Show Semester Result page
    semesterPage.classList.remove("hidden");

    // Close the services menu
    submenu.classList.add("hidden");
    arrow.textContent = "›";

    // Move to Semester Result
    window.scrollTo({
      top: semesterPage.offsetTop - 20,
      behavior: "smooth"
    });

  });


  // Go button
  go.addEventListener("click", function () {

    result.classList.remove("hidden");

  });

});
