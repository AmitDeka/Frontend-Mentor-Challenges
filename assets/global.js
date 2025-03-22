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
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card border-0 bg-white">
          <div class="card-body">
            <img src="${challenge.imgSrc}" alt="${challenge.title}" class="card-img-top rounded-2" />
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
