console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  const dogImageContainer = document.getElementById("dog-image-container");
  const dogBreedsList = document.getElementById("dog-breeds");
  const breedDropdown = document.getElementById("breed-dropdown");
  let allBreeds = [];

  // Challenge 1: Fetch and display random dog images
  fetch(imgUrl)
    .then((response) => response.json())
    .then((data) => {
      data.message.forEach((imageUrl) => {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Random dog";
        dogImageContainer.appendChild(img);
      });
    });

  // Challenge 2: Fetch and list all dog breeds (modified to store breeds)
  fetch(breedUrl)
    .then((response) => response.json())
    .then((data) => {
      allBreeds = Object.keys(data.message);
      renderBreeds(allBreeds);
    });

  function renderBreeds(breeds) {
    dogBreedsList.innerHTML = "";
    breeds.forEach((breed) => {
      const li = document.createElement("li");
      li.textContent = breed;
      dogBreedsList.appendChild(li);
    });
  }

  // Challenge 3: Change font color on click
  dogBreedsList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      event.target.style.color = "blue";
    }
  });

  // Challenge 4: Filter breeds by letter
  breedDropdown.addEventListener("change", (event) => {
    const selectedLetter = event.target.value;
    if (selectedLetter === "all") {
      renderBreeds(allBreeds);
    } else {
      const filteredBreeds = allBreeds.filter((breed) =>
        breed.startsWith(selectedLetter)
      );
      renderBreeds(filteredBreeds);
    }
  });
});
