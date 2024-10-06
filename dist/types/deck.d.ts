import Card from "./card";
declare class Deck {
    private cards;
    private hasJokers;
    private aceIsEleven;
    private discardPile;
    constructor(hasJokers?: boolean, aceIsEleven?: boolean);
    private generateCards;
    shuffle(): void;
    draw(): Card;
    discard(card: Card): void;
    addCard(card: Card): void;
    slipCard(card: Card): void;
    reveal(): Card;
    shuffleCard(card: Card): void;
}
export default Deck;
