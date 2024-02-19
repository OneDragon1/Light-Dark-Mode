const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// Function to update images
function imageMode(color) {
  image1.src = `img/undraw_content_team_${color}.svg`;
  image2.src = `img/undraw_projections_re_${color}.svg`;
  image3.src = `img/undraw_audio_conversation_${color}.svg`;
}

// Function to toggle between Dark and Light mode styles
function toggleMode(isDark) {
  nav.style.backgroundColor = isDark
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255/ 50%)";
  textBox.style.backgroundColor = isDark
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
  toggleIcon.children[1].classList.replace(
    isDark ? "fa-sun" : "fa-moon",
    isDark ? "fa-moon" : "fa-sun"
  );
  imageMode(isDark ? "dark" : "light");
}

// Switch Theme Dynamically
function switchTheme(event) {
  const isDark = event.target.checked;
  document.documentElement.setAttribute(
    "data-theme",
    isDark ? "dark" : "light"
  );
  localStorage.setItem("theme", isDark ? "dark" : "light");
  toggleMode(isDark);
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage for Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  toggleSwitch.checked = currentTheme === "dark";
  toggleMode(currentTheme === "dark");
}
