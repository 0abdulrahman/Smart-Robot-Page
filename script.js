const button = document.querySelector("#scrollTop");

function scrollToTop() {
  window.scrollTo({
    top: 0,
  });
}

button.addEventListener("click", scrollToTop);

function checkScroll() {
  if (window.scrollY > 500) {
    button.style.cssText = "transform: translateX(0);";
  } else {
    button.style.cssText = "transform: translateX(100px);";
  }
}

window.addEventListener("scroll", checkScroll);
