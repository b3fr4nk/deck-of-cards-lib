import Card from "../dist/card.js"
import {Suit, Color} from "../dist/card.js"

test("compare ace and two with aceIsEleven as true", () => {
    const ace = new Card(Suit.Spade, "ace", Color.Red, true)
    const two = new Card(Suit.Spade, "2", Color.Red, true)

    expect(two.toValue() < ace.toValue()).toBe(true)
})

test("compare ace and two with aceIsEleven as false", () => {
    const ace = new Card(Suit.Spade, "ace", Color.Red, false);
    const two = new Card(Suit.Spade, "2", Color.Red, true);

    expect(two.toValue() < ace.toValue()).toBe(false);
});

test("print emoji of red 9 of hearts", () => {
    const red9Heart = new Card(Suit.Heart, "9", Color.Red)
    expect(red9Heart.toEmoji()).toBe("🟥❤️ 9");
})

