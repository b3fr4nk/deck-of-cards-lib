export declare enum Suit {
    Heart = "heart",
    Spade = "spade",
    Club = "club",
    Diamond = "diamond",
    Joker = "joker"
}
export declare enum Color {
    Red = "red",
    Black = "black"
}
declare class Card {
    private suit;
    private value;
    private color;
    private aceIsEleven;
    constructor(suit: Suit, value: string, color: Color, aceIsEleven: boolean);
    toValue(): number;
    toString(): string;
    toEmoji(): string;
}
export default Card;
