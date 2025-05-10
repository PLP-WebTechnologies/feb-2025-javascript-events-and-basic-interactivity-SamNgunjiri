// 1. Event Handling

// Click event
const changeTextBtn = document.getElementById('changeTextBtn');
changeTextBtn.addEventListener('click', () => {
  changeTextBtn.textContent = "You Clicked Me!";
  changeTextBtn.style.backgroundColor = "#28a745";
});

// Double click event
const secretBtn = document.getElementById('secretBtn');
secretBtn.addEventListener('dblclick', () => {
  alert("🎉 You discovered the secret action!");
});

// Hover effect
secretBtn.addEventListener('mouseover', () => {
  secretBtn.style.backgroundColor = '#ffc107';
});
secretBtn.addEventListener('mouseout', () => {
  secretBtn.style.backgroundColor = '#007BFF';
});

// Keypress detection
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    alert("Enter key pressed!");
  }
});

// 2. Interactive Elements

// Image gallery
const images = [
  "https://via.placeholder.com/300/FF0000",
  "https://via.placeholder.com/300/00FF00",
  "https://via.placeholder.com/300/0000FF"
];
let currentImg = 0;
const galleryImg = document.getElementById('galleryImage');
document.getElementById('nextImage').addEventListener('click', () => {
  currentImg = (currentImg + 1) % images.length;
  galleryImg.src = images[currentImg];
});

// Tabs
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.tab;
    tabContents.forEach(tab => {
      tab.classList.remove('active');
    });
    document.getElementById(target).classList.add('active');
  });
});

// 3. Form Validation
const form = document.getElementById('signupForm');
const feedback = document.getElementById('formFeedback');
form.addEventListener('submit', function (e) {
  e.preventDefault(); // prevent actual form submission

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  // Simple validations
  if (!email || !password) {
    feedback.textContent = "All fields are required.";
    return;
  }

  if (!email.includes('@')) {
    feedback.textContent = "Please enter a valid email.";
    return;
  }

  if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
    return;
  }

  feedback.style.color = "green";
  feedback.textContent = "Form submitted successfully!";
});
