class MatchArray {
  constructor() {
    this.array = [];
  }

  add(value) {
    if (this.array.length >= 0 && this.array.length < 2) {
      this.array.push(value);
    }
  }

  clear() {
    this.array = [];
  }

  isFull() {
    return this.array.length === 2;
  }

  match() {
    if (this.isFull()) {
      const [value1, value2] = this.array;
      return value1 === value2;
    } else {
      return false;
    }
  }
}

export default function () {
  // 0 - initialize the match array
  const matchArray = new MatchArray();

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
