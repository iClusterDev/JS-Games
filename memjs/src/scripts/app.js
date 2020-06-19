class MatchArray {
  constructor() {
    this.array = [];
  }

  add(cardItem) {
    if (this.array.length >= 0 && this.array.length < 2) {
      this.array.push(cardItem);
    }
  }

  remove({ id }) {
    this.array = this.array.filter((item) => item.id !== id);
  }

  clear() {
    this.array = [];
  }

  isFull() {
    return this.array.length === 2;
  }

  isMatch() {
    if (this.isFull()) {
      const [item1, item2] = this.array;
      return item1.id !== item2.id && item1.value === item2.value;
    } else {
      return false;
    }
  }
}

class CardItem {
  constructor(id, value) {
    this.id = id;
    this.value = value;
    this.flipped = false;
    this.template = document.createElement("div");
    this.listener = null;
  }

  activate(onFlipCb) {
    this.template.classList.add("card");
    this.listener = () => {
      this.template.classList.toggle("flipped");
      this.flipped = !this.flipped;
      if (onFlipCb) onFlipCb();
    };
    this.template.addEventListener("click", this.listener);
  }

  deactivate() {
    this.template.removeEventListener("click", this.listener);
  }
}

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

  // 0 - initialize the match array
  const matchArray = new MatchArray();

  // 0 - initialize the game board
  const gameBoard = document.querySelector("#game-board");

  cards.forEach((card, index) => {
    const newCard = new CardItem(index, card.value);
    newCard.activate(() => {
      newCard.flipped ? matchArray.add(newCard) : matchArray.remove(newCard);
      if (matchArray.isMatch()) {
        scores++;
        matchArray.array.forEach((card) => card.deactivate());
        matchArray.clear();
      }
      // if is not match
      // reflip the cards and empty the matcharray
    });
    gameBoard.appendChild(newCard.template);
  });

  // 1 - on loaded populate the gameboard with game cards
  // 2 - on card click
  //      flip the card
  //      store the card value into the match array
  //      if match array length === 2 check for match
  //        if match
  //          increase scores (max 8)
  //          if score === 8
  //            you win
  //          else
  //            remove event listener from cards
  //            clear the match array
  //        else
  //          reflip the cards
  //          clear the match array
  //      else
  //        keep going
}
