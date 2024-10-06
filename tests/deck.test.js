import Deck from "../dist/bundle.esm.js"
import Card from "../dist/card.js"

test("discard card", () => {
    const deck = new Deck(false, true)

    const card = deck.draw()
    deck.discard(card)

    expect(deck.discardPile).toContain(card)
})

test("add card", () => {
    const deck = new Deck(false, true);

    const card = deck.draw();
    deck.addCard(card)

    expect(deck.reveal()).toBe(card)
})

test("slip card", () => {
    const deck = new Deck(false, true);

    const card = deck.draw();
    deck.slipCard(card)

    expect(deck.cards[deck.cards.length - 1]).toBe(card)
})