// Typing effect
const text = ["Web Developer", "AI Enthusiast", "IoT Builder"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      currentText = text[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentText = text[i].substring(0, j--);
    }

    document.querySelector(".typing").innerHTML = currentText;

    if (j === text[i].length) isDeleting = true;
    if (j === 0 && isDeleting) {
      isDeleting = false;
      i++;
      if (i === text.length) i = 0;
    }
  }
  setTimeout(type, 100);
}

type();

// Scroll function
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView();
}
