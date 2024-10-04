import Card from "./card";
import { Suit, Color } from "./card";
var Deck = /** @class */ (function () {
    function Deck(hasJokers, aceIsEleven) {
        if (hasJokers === void 0) { hasJokers = true; }
        if (aceIsEleven === void 0) { aceIsEleven = true; }
        this.hasJokers = hasJokers;
        this.aceIsEleven = aceIsEleven;
        this.cards = [];
        this.discardPile = [];
        this.generateCards();
    }
    Deck.prototype.generateCards = function () {
        // generate all cards
        // generate jokers if applicable
        if (this.hasJokers) {
            this.cards.push(new Card(Suit.Joker, "joker", Color.Red, this.aceIsEleven));
            this.cards.push(new Card(Suit.Joker, "joker", Color.Black, this.aceIsEleven));
        }
        for (var i = 0; i < 4; i++) {
            var currSuit = Suit.Club;
            switch (i) {
                case 1:
                    currSuit = Suit.Diamond;
                case 2:
                    currSuit = Suit.Heart;
                case 3:
                    currSuit = Suit.Spade;
            }
            for (var k = 0; k < 2; k++) {
                var color = Color.Red;
                if (k == 1) {
                    color = Color.Black;
                }
                // generate numbered cards
                for (var j = 2; j <= 10; j++) {
                    this.cards.push(new Card(currSuit, "".concat(j), color, this.aceIsEleven));
                }
                // generate face cards
                for (var j = 0; j < 4; j++) {
                    var curFace = "jack";
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
    };
    Deck.prototype.shuffle = function () {
        for (var i = this.cards.length - 1; i >= 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    };
    Deck.prototype.draw = function () {
        var drawnCard = this.cards[0];
        this.cards.splice(0, 1);
        return drawnCard;
    };
    Deck.prototype.discard = function (card) {
        this.discardPile.push(card);
    };
    Deck.prototype.addCard = function (card) {
        this.cards = [card].concat(this.cards);
    };
    Deck.prototype.slipCard = function (card) {
        this.cards.push(card);
    };
    Deck.prototype.reveal = function () {
        return this.cards[0];
    };
    return Deck;
}());
export default Deck;
