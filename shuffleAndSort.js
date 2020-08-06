class Boggle {
  constructor() {
    this.content = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
  between(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  shuffleNumbers() {
    const array = this.content;
    for (let i = 0; i < 8; i++) {
      const randomPosition = this.between(i + 1, 9);

      [array[randomPosition], array[i]] = [array[i], array[randomPosition]];
    }

    return array;
  }
  sortNumbers() {
    this.content.sort();

    return this.content;
  }
}

const boggle = new Boggle();

handleShuffleOnClick();

function handleShuffleOnClick() {
  const numbers = boggle.shuffleNumbers();
  renderNumbers(numbers);
}

function handleSortOnClick() {
  const numbers = boggle.sortNumbers();
  renderNumbers(numbers);
}

function renderNumbers(numbers) {
  var contentDiv = document.getElementById("numbers");
  contentDiv.innerHTML = null;
  numbers.forEach(element => {
    var newDiv = document.createElement("DIV");
    newDiv.innerHTML = element;
    newDiv.setAttribute("value", element);
    newDiv.classList.add("number");
    contentDiv.appendChild(newDiv);
  });
}
