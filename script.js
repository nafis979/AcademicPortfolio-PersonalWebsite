// Animation for hero section text
const animatedText = document.getElementById("animated-text");
const words = ["EEE Engineer", "Blogger", "Traveller"];
let wordIndex = 0;
let i = 0;
let isDeleting = false;

function animateText() {
  const currentWord = words[wordIndex];
  if (!isDeleting) {
    animatedText.textContent = currentWord.substring(0, i + 1);
    i++;
    if (i > currentWord.length) {
      isDeleting = true;
      setTimeout(() => {
        animateText(); // Continue animation after a delay
      }, 1500); // 1.5-second delay before deleting
    } else {
      setTimeout(animateText, 100); // Generate next letter
    }
  } else {
    animatedText.textContent = currentWord.substring(0, i - 1);
    i--;
    if (i === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length; // Move to the next word
      setTimeout(() => {
        animateText(); // Continue animation after a delay
      }, 300); // 0.3-second delay before generating the next word
    } else {
      setTimeout(animateText, 100); // Delete next letter
    }
  }
}

animateText(); // Start the animation

// Hide/show top navigation bar on scroll
let prevScrollpos = window.pageYOffset;
window.addEventListener("scroll", () => {
  const topNav = document.querySelector(".top-nav");
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    topNav.style.top = "0";
  } else {
    topNav.style.top = "-80px"; // Adjust this value if needed
  }
  prevScrollpos = currentScrollPos;
});

// Learning section percentage animation
const progressBars = document.querySelectorAll(".progress-bar");

function animateProgressBars() {
  progressBars.forEach((bar) => {
    const targetPercentage = bar.getAttribute("data-percentage");
    let currentPercentage = 0;
    const interval = setInterval(() => {
      if (currentPercentage < targetPercentage) {
        currentPercentage++;
        bar.style.width = currentPercentage + "%";
        bar.textContent = currentPercentage + "%";
      } else {
        clearInterval(interval);
      }
    }, 30); // Adjust timing as needed
  });
}

// Call the function to start the animation when the page loads
window.addEventListener("load", animateProgressBars);

const contactForm = document.querySelector(".contact-right form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default submission
  const nameInput = document.querySelector('input[name="name"]');
  const emailInput = document.querySelector('input[name="email"]');
  const subjectInput = document.querySelector('input[name="subject"]');
  const messageInput = document.querySelector('textarea[name="message"]');

  // Basic input validation (you can add more checks)
  if (
    nameInput.value.trim() === "" ||
    emailInput.value.trim() === "" ||
    subjectInput.value.trim() === "" ||
    messageInput.value.trim() === ""
  ) {
    alert("Please fill in all fields.");
    return;
  }

  // Basic input sanitization (you can add more sanitization)
  nameInput.value = sanitizeInput(nameInput.value);
  emailInput.value = sanitizeInput(emailInput.value);
  subjectInput.value = sanitizeInput(subjectInput.value);
  messageInput.value = sanitizeInput(messageInput.value);

  // If validation and sanitization pass, submit the form
  contactForm.submit();
});

function sanitizeInput(input) {
  // Example sanitization: escape HTML special characters
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


const menuToggle = document.querySelector('.menu-toggle');
const leftSidebar = document.querySelector('.left-sidebar');
const closeMenu = document.querySelector('.close-menu');
const sidebarLinks = document.querySelectorAll('.side-nav a');

menuToggle.addEventListener('click', () => {
    leftSidebar.classList.add('active');
    document.body.classList.add('no-scroll');
});

closeMenu.addEventListener('click', () => {
    leftSidebar.classList.remove('active');
    document.body.classList.remove('no-scroll');
});

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        leftSidebar.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        leftSidebar.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
});