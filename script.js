const filters = document.querySelectorAll(".filter");
const articles = document.querySelectorAll(".article");

filters.forEach((filter) => {

  filter.addEventListener("click", () => {

    const category = filter.dataset.filter;


    // Update active button

    filters.forEach((item) => {
      item.classList.remove("active");
    });

    filter.classList.add("active");


    // Filter articles

    articles.forEach((article) => {

      const articleCategory = article.dataset.category;

      if (
        category === "all" ||
        articleCategory === category
      ) {
        article.classList.remove("hidden");
      } else {
        article.classList.add("hidden");
      }

    });

  });

});

</writing>

/* =========================
   TRUST SCORE
========================= */

const trustScore = document.querySelector(".trust-score");

if (trustScore) {

  const score = Number(
    trustScore.dataset.score
  );

  const safeScore = Math.min(
    100,
    Math.max(0, score)
  );


  const valueElement =
    document.querySelector("#trust-value");

  const progressElement =
    document.querySelector("#trust-progress");


  if (valueElement) {
    valueElement.textContent = safeScore;
  }


  if (progressElement) {
    progressElement.style.width =
      `${safeScore}%`;
  }

}
