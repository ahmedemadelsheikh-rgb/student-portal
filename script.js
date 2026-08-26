const servicesToggle=document.getElementById("servicesToggle");
const submenu=document.getElementById("submenu");
const arrow=document.getElementById("arrow");
const semesterBtn=document.getElementById("semesterBtn");
const homePage=document.getElementById("homePage");
const semesterPage=document.getElementById("semesterPage");
const result=document.getElementById("result");
const goBtn=document.getElementById("goBtn");

servicesToggle.addEventListener("click",()=>{
  submenu.classList.toggle("hidden");
  arrow.textContent=submenu.classList.contains("hidden")?"›":"⌄";
});

semesterBtn.addEventListener("click",()=>{
  homePage.classList.add("hidden");
  semesterPage.classList.remove("hidden");
  submenu.classList.add("hidden");
  arrow.textContent="›";
  window.scrollTo({top:0,behavior:"smooth"});
});

goBtn.addEventListener("click",()=>{
  result.classList.remove("hidden");
  result.scrollIntoView({behavior:"smooth"});
});
