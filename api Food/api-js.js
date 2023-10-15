/* używane api: 'https://www.themealdb.com/api.php'*/
document.getElementById("recipe-close-btn").onclick = function () {
  document.querySelector(".meal-details-content").parentElement.style.display =
    "none";
};
document.getElementById("random-btn").onclick = function () {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      data.meals.forEach((meal) => {
        html += `
                <div class = "meal-item" data-id = "${meal.idMeal}">
                    <div class = "meal-img">
                        <img src = "${meal.strMealThumb}" alt = "thumbnail">
                    </div>
                    <div class = "meal-name">
                        <h3>${meal.strMeal}</h3>
                        <a href = "#" class = "recipe-btn">Recipe</a>
                    </div>
                </div>
            `;
      });
      document.getElementById("meal").classList.remove("notFound");

      document.getElementById("meal").innerHTML = html;
    });
};
document.getElementById("search-btn").onclick = function () {
  let input = document.getElementById("search-input").value.trim();
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`)
    .then((res) => res.json())
    .then((data) => {
      let html = "";
      if (data.meals) {
        data.meals.forEach((meal) => {
          html += `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "thumbnail">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Recipe</a>
                        </div>
                    </div>
                `;
        });
        document.getElementById("meal").classList.remove("notFound");
      } else {
        html = "We haven't fount this ingredient!";
        document.getElementById("meal").classList.add("notFound");
      }

      document.getElementById("meal").innerHTML = html;
    });
};

document.getElementById("meal").onclick = function (event) {
  event.preventDefault();
  if (event.target.classList.contains("recipe-btn")) {
    let mealItem = event.target.parentElement.parentElement;
    //console.log(mealItem);
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`
    )
      .then((res) => res.json())
      .then((data) => mealRecipeAlert(data.meals)); //do daty przypisujemy funkcje z wyskakujacym oknem z instrukcjami wykonania przepisu
  }
};

function mealRecipeAlert(x) {
  x = x[0];
  let html = `
        <h2 class = "recipe-title">${x.strMeal}</h2>
        <p class = "recipe-category">${x.strCategory}</p>
        <div class = "recipe-instruct">
            <h3>Steps:</h3>
            <p>${x.strInstructions}</p>
        </div>
        <div class = "recipe-meal-img">
            <img src = "${x.strMealThumb}" alt = "mthumbnail">
        </div>`;
  document.querySelector(".meal-details-content").innerHTML = html;
  document.querySelector(".meal-details-content").parentElement.style.display =
    "block";
}
