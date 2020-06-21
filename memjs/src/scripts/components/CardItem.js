class CardItem {
  constructor(id, value) {
    this.id = id;
    this.value = value;
    this.flipped = false;
    this.listener = null;
    this.template = document.createElement("div");
  }

  configure() {
    this.template.classList.add("card");
    return this;
  }

  reset() {
    this.template.classList.remove("flipped");
    this.flipped = false;
  }

  activate(onFlipCb) {
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

// class GameCard {
//   constructor(options = {}) {
//     this.id = null;
//     this.value = null;
//     this.active = false;
//     this.flipped = false;
//     this.listener = null;
//     this.template = null;
//     this.style = {
//       baseClassName: "",
//       backClassName: "",
//       frontClassName: "",
//     };
//   }

//   initialize() {
//     this.template.classList.add(this.backClassName);
//   }
// }

export default CardItem;
