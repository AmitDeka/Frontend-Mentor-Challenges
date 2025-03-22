const challenges = [
  {
    title: "Stats preview card component",
    description:
      "This is a great small challenge to help get you used to building to a design. There's no JS in this project, so you'll be able to focus on your HTML & CSS skills.",
    imgSrc: "./assets/challenges/Stats-preview-card-component.jpg",
    codeLink:
      "https://github.com/AmitDeka/Frontend-Mentor-Challenges/tree/main/challenges/Stats-preview-card-component",
    liveLink:
      "https://frontend-mentor-challenges-sable-eight.vercel.app/challenges/Stats-preview-card-component",
  },
  {
    title: "QR code component",
    description:
      "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
    imgSrc: "./assets/challenges/QR-code-component.jpg",
    codeLink:
      "https://github.com/AmitDeka/Frontend-Mentor-Challenges/tree/main/challenges/QR-code-component",
    liveLink:
      "https://frontend-mentor-challenges-sable-eight.vercel.app/challenges/QR-code-component",
  },
  {
    title: "Testimonials grid section",
    description:
      "This challenge will be perfect practice for anyone wanting to test their CSS Grid skills. Grid is such a powerful addition to CSS, so it's worth getting to grips with it!",
    imgSrc: "./assets/challenges/Testimonials-grid-section.jpg",
    codeLink:
      "https://github.com/AmitDeka/Frontend-Mentor-Challenges/tree/main/challenges/Testimonials-grid-section",
    liveLink:
      "https://frontend-mentor-challenges-sable-eight.vercel.app/challenges/Testimonials-grid-section",
  },
  {
    title: "Social links profile",
    description:
      "In this small project, you'll build out your social link-sharing profile. You can even personalize it and use it to share all your social profiles!",
    imgSrc: "./assets/challenges/Social-links-profile.jpg",
    codeLink:
      "https://github.com/AmitDeka/Frontend-Mentor-Challenges/tree/main/challenges/Social-links-profile",
    liveLink:
      "https://frontend-mentor-challenges-sable-eight.vercel.app/challenges/Social-links-profile",
  },
  {
    title: "Blog preview card",
    description:
      "This HTML & CSS-only challenge is a perfect project for beginners getting up to speed with HTML and CSS fundamentals, like HTML structure and the box model.",
    imgSrc: "./assets/challenges/Blog-preview-card.jpg",
    codeLink:
      "https://github.com/AmitDeka/Frontend-Mentor-Challenges/tree/main/challenges/Blog-preview-card",
    liveLink:
      "https://frontend-mentor-challenges-sable-eight.vercel.app/challenges/Blog-preview-card",
  },
  {
    title: "Interactive rating component",
    description:
      "This is a nice, small project to practice handling user interactions and updating the DOM. Perfect for anyone who has learned the basics of JavaScript!",
    imgSrc: "./assets/challenges/Interactive-rating-component.jpg",
    codeLink:
      "https://github.com/AmitDeka/Frontend-Mentor-Challenges/tree/main/challenges/Interactive-rating-component",
    liveLink:
      "https://frontend-mentor-challenges-sable-eight.vercel.app/challenges/Interactive-rating-component",
  },
  {
    title: "IP Address Tracker",
    description:
      "In this challenge, you'll be using two separate APIs together to create an IP Address Tracking app.",
    imgSrc: "./assets/challenges/IP-address-tracker.jpg",
    codeLink:
      "https://github.com/AmitDeka/Frontend-Mentor-Challenges/tree/main/challenges/IP-address-tracker",
    liveLink:
      "https://frontend-mentor-challenges-sable-eight.vercel.app/challenges/IP-address-tracker",
  },
  {
    title: "Four card feature section",
    description:
      "A nice layout-based challenge for beginners. This will test anyone who is new to multi-column and responsive layouts.",
    imgSrc: "./assets/challenges/Four-card-feature-section.jpg",
    codeLink:
      "https://github.com/AmitDeka/Frontend-Mentor-Challenges/tree/main/challenges/Four-card-feature-section",
    liveLink:
      "https://frontend-mentor-challenges-sable-eight.vercel.app/challenges/Four-card-feature-section",
  },
];

// document.addEventListener("DOMContentLoaded", function () {
//   // document.body.classList.add("loading"); // Add class to hide scrollbar

//   setTimeout(() => {
//     document.getElementById("loader").style.display = "none";
//     // document.body.classList.remove("loading"); // Restore scrolling
//   }, 1000); // Adjust delay as needed
// });

document.getElementById("year").textContent = new Date().getFullYear();

const container = document.getElementById("challengesContainer");
container.innerHTML = challenges
  .map(
    (challenge) => `
      <div class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="card border-0 bg-white h-100 shadow-sm">
          <div class="card-body">
            <img src="${challenge.imgSrc}" alt="${challenge.title}" class="card-img-top rounded-2" loading="lazy"/>
            <h4 class="card-title mt-3">${challenge.title}</h4>
            <p class="card-description">${challenge.description}</p>
            <div class="w-100 d-flex justify-content-between mt-3">
              <a href="${challenge.codeLink}" class="btn btn-outline-dark me-2 fw-semibold" target="_blank">
                <i class="bi bi-github me-2"></i>Code
              </a>
              <a href="${challenge.liveLink}" class="btn btn-outline-dark fw-semibold" target="_blank">
                <i class="bi bi-box-arrow-up-right me-2"></i>Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    `
  )
  .join("");
