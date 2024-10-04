import Card from "./card";
import { Suit, Color } from "./card";

class Deck {
  private cards: Card[];
  private hasJokers: boolean;
  private aceIsEleven: boolean;
  private discardPile: Card[];

  constructor(hasJokers = true, aceIsEleven = true) {
    this.hasJokers = hasJokers;
    this.aceIsEleven = aceIsEleven;
    this.cards = [];
    this.discardPile = [];

    this.generateCards();
  }

  private generateCards() {
    // generate all cards

    // generate jokers if applicable
    if (this.hasJokers) {
      this.cards.push(
        new Card(Suit.Joker, "joker", Color.Red, this.aceIsEleven)
      );
      this.cards.push(
        new Card(Suit.Joker, "joker", Color.Black, this.aceIsEleven)
      );
    }

    for (let i = 0; i < 4; i++) {
      let currSuit = Suit.Club;
      switch (i) {
        case 1:
          currSuit = Suit.Diamond;
        case 2:
          currSuit = Suit.Heart;
        case 3:
          currSuit = Suit.Spade;
      }
      for (let k = 0; k < 2; k++) {
        let color = Color.Red;
        if (k == 1) {
          color = Color.Black;
        }
        // generate numbered cards
        for (let j = 2; j <= 10; j++) {
          this.cards.push(new Card(currSuit, `${j}`, color, this.aceIsEleven));
        }
        // generate face cards
        for (let j = 0; j < 4; j++) {
          let curFace = "jack";
          switch (j) {
            case 1:
              curFace = "queen";
            case 2:
              curFace = "king";
            case 3:
              curFace = "ace";
          }
          this.cards.push(new Card(currSuit, curFace, color, this.aceIsEleven));
        }
      }
    }
  }

  shuffle() {
    for (var i = this.cards.length - 1; i >= 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }

  draw():Card {
    const drawnCard = this.cards[0]
    this.cards.splice(0, 1)
    return drawnCard
  }

  discard(card:Card) {
    this.discardPile.push(card)
  }

  addCard(card:Card) {
    this.cards = [card].concat(this.cards)
  }

  slipCard(card:Card) {
    this.cards.push(card)
  }

  reveal():Card {
    return this.cards[0]
  }
}

export default Deck;
