document.getElementById("year").textContent = new Date().getFullYear();

//  Dark / Light mode toggle
var themeButton = document.getElementById("theme-toggle");

function setTheme(isDark) {
  if (isDark) {
    document.body.classList.add("dark-theme");
    themeButton.textContent = "Light Mode";
  } else {
    document.body.classList.remove("dark-theme");
    themeButton.textContent = "Dark Mode";
  }
}

setTheme(localStorage.getItem("theme") === "dark");

themeButton.addEventListener("click", function () {
  var goingDark = !document.body.classList.contains("dark-theme");
  setTheme(goingDark);
  localStorage.setItem("theme", goingDark ? "dark" : "light");
});

// Statistics page
var filterButtons = document.querySelectorAll(".filter-btn");
var statCards = document.querySelectorAll(".stat");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var filter = button.getAttribute("data-filter");

    filterButtons.forEach(function (b) { b.classList.remove("active"); });
    button.classList.add("active");

    statCards.forEach(function (card) {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Statistics page 
var accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    button.nextElementSibling.classList.toggle("open");
  });
});
