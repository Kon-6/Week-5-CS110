// ==========================================
// CS110 WEEK 5 - JAVASCRIPT
// ==========================================


// ---------- SCROLL PROGRESS BAR ----------

// Create the progress bar
const progressBar = document.createElement("div");

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.width = "0%";
progressBar.style.background = "#6ea8fe";
progressBar.style.zIndex = "1000";
progressBar.style.transition = "width 0.1s";

document.body.appendChild(progressBar);


// Update progress bar when scrolling
window.addEventListener("scroll", function () {

  const scrollTop = window.scrollY;

  const pageHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const scrollPercent =
    (scrollTop / pageHeight) * 100;

  progressBar.style.width = scrollPercent + "%";
});



// ---------- FADE IN WEEK SECTIONS ----------

const sections = document.querySelectorAll("section");

// Start sections slightly faded
sections.forEach(function (section) {

  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition =
    "opacity 0.6s ease, transform 0.6s ease";

});


// Watch for sections entering the screen
const observer = new IntersectionObserver(function (entries) {

  entries.forEach(function (entry) {

    if (entry.isIntersecting) {

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

    }

  });

}, {
  threshold: 0.15
});


sections.forEach(function (section) {
  observer.observe(section);
});



// ---------- BACK TO TOP BUTTON ----------

const topButton = document.createElement("button");

topButton.textContent = "↑ Back to Top";

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.padding = "12px 18px";
topButton.style.border = "none";
topButton.style.borderRadius = "10px";
topButton.style.background = "#6ea8fe";
topButton.style.color = "#0b0f19";
topButton.style.fontWeight = "bold";
topButton.style.cursor = "pointer";
topButton.style.display = "none";

document.body.appendChild(topButton);


// Show button after scrolling down
window.addEventListener("scroll", function () {

  if (window.scrollY > 400) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }

});


// Scroll back to top when clicked
topButton.addEventListener("click", function () {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});