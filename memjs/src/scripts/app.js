import CardItem from "./components/CardItem";
import MatchArray from "./components/MatchArray";

class GameCard {
  constructor(options = {}) {
    this.id = null;
    this.value = null;
    this.active = false;
    this.flipped = false;
    this.listener = null;
    this.template = document.createElement("div");
    this.style = {
      baseClassName: "card",
      backClassName: "back-face",
      frontClassName: "front-face",
    };
  }

  initialize() {
    const { baseClassName, backClassName } = this.style;
    this.template.classList.add(baseClassName, backClassName);
  }
}

const gameCard = new GameCard();
gameCard.initialize();
console.log(gameCard);

export default function () {
  // 0 - configure the cards
  const cards = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
  ];

  // 0 - initialize the match array
  let scores = 0;
  document.querySelector("#scores").innerHTML = scores;

  // 0 - initialize the match array
  const matchArray = new MatchArray();

  // 0 - initialize the game board
  const gameBoard = document.querySelector("#game-board");

  const storeForMatch = (carditem) => {
    carditem.flipped ? matchArray.add(carditem) : matchArray.remove(carditem);
  };

  const isMatch = () => {
    if (matchArray.isFull()) {
      if (matchArray.isMatch()) {
        // scores++;
        matchArray.array.forEach((card) => card.deactivate());
        matchArray.clear();
        return true;
      } else {
        setTimeout(() => {
          matchArray.array.forEach((card) => card.reset());
          matchArray.clear();
        }, 500);
        return false;
      }
    }
  };

  cards.forEach((card, index) => {
    const newCard = new CardItem(index, card.value);
    newCard.configure().activate(() => {
      // add selected
      storeForMatch(newCard);
      // check for match
      if (isMatch()) {
        // update scores
        document.querySelector("#scores").innerHTML = ++scores;
      }
      // check for win
      if (scores === 8) {
        alert("You did it!");
      }
    });
    gameBoard.appendChild(newCard.template);
  });
}
