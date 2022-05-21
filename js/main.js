const iconMenu = document.querySelector(".icon-menu");
const arrowIconFeatures = document.querySelector(".arrow-icon-features");
const arrowIconCompany = document.querySelector(".arrow-icon-company");
const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav-list");
const features = document.querySelector(".features-drop");
const featuresList = document.querySelector(".features-list");
const company = document.querySelector(".company-drop");
const companyList = document.querySelector(".company-list");
const loginContainer = document.querySelector(".login-container");
const headerBtn = document.querySelector(".header__btn");

features.addEventListener("click", () => {
  featuresList.classList.toggle("active");
  arrowIconFeatures.classList.toggle("active");
});

company.addEventListener("click", () => {
  companyList.classList.toggle("active");
  arrowIconCompany.classList.toggle("active");
});

iconMenu.addEventListener("click", () => {
  iconMenu.classList.toggle("active");
  nav.classList.toggle("active");
  navList.classList.toggle("active");
  loginContainer.classList.toggle("active");
  headerBtn.classList.toggle("active");
});
