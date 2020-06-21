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

export default MatchArray;
