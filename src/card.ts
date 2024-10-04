export enum Suit {
  Heart = "heart",
  Spade = "spade",
  Club = "club",
  Diamond = "diamond",
  Joker = "joker"
}

export enum Color {
  Red = "red",
  Black = "black",
}

class Card {
  private suit: Suit;
  private value: string;
  private color: Color;
  private aceIsEleven: boolean;

  constructor(suit: Suit, value: string, color: Color, aceIsEleven: boolean) {
    this.suit = suit;
    this.value = value;
    this.color = color;
    this.aceIsEleven = aceIsEleven;
  }

  // Used for comparison only
  toValue(): number {
    if (isNaN(Number(this.value))) {
      switch (this.value.toLowerCase()) {
        case "ace":
          if (this.aceIsEleven) {
            return 11;
          }
          return 1;
        case "jack":
          return 10.1;
        case "queen":
          return 10.2;
        case "king":
          return 10.3;
        case "joker":
          return 12;
        default:
          throw new TypeError(
            `Error: Value is not a valid playing card. Card: ${this.value}`
          );
      }
    } else {
      return Number(this.value);
    }
  }

  toString(): string {
    return `${this.color} ${this.value} of ${this.suit}`;
  }

  toEmoji(): string {
    let emoji = "";

    if (this.suit === Suit.Diamond) {
      if (this.color === Color.Red) {
        emoji = "🟥♦️";
      } else {
        emoji = "⬛️♦";
      }
    } else if (this.suit === Suit.Club) {
      if (this.color === Color.Red) {
        emoji = "🟥♣️";
      } else {
        emoji = "⬛️♣️";
      }
    } else if (this.suit === Suit.Heart) {
      if (this.color === Color.Red) {
        emoji = "🟥❤️";
      } else {
        emoji = "⬛️❤️";
      }
    } else if (this.suit === Suit.Spade) {
      if (this.color === Color.Red) {
        emoji = "🟥♠️"
      } else {
        emoji = "⬛️♠️";
      }
    }

    return `${emoji} ${this.value}`
  }
}

export default Card;
