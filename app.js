const rating = document.querySelector(".rating-value");
const rat = document.getElementById("rating");

const val = ["5", "4.5", "4", "3.5", "3", "2.5", "2", "1.5", "1", "0.5"];

val.map(
  (v, key) =>
    (rat.innerHTML += `
  <input type="radio" name="rating" id="start${key}" value="${v}">
  <label for="start${key}" class="${key % 2 === 0 ? "full" : "half"}">
  </label>`)
);

rat.addEventListener("change", ({ target }) => {
  rat.classList.add("animate");
  rating.innerHTML = `<span>${target.value}</span>`;
  setTimeout(() => rat.classList.remove("animate"), 500);
});
