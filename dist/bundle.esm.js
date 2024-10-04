var Suit;
(function (Suit) {
    Suit["Heart"] = "heart";
    Suit["Spade"] = "spade";
    Suit["Club"] = "club";
    Suit["Diamond"] = "diamond";
    Suit["Joker"] = "joker";
})(Suit || (Suit = {}));
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Black"] = "black";
})(Color || (Color = {}));
var Card = /** @class */ (function () {
    function Card(suit, value, color, aceIsEleven) {
        this.suit = suit;
        this.value = value;
        this.color = color;
        this.aceIsEleven = aceIsEleven;
    }
    // Used for comparison only
    Card.prototype.toValue = function () {
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
                    throw new TypeError("Error: Value is not a valid playing card. Card: ".concat(this.value));
            }
        }
        else {
            return Number(this.value);
        }
    };
    Card.prototype.toString = function () {
        return "".concat(this.color, " ").concat(this.value, " of ").concat(this.suit);
    };
    Card.prototype.toEmoji = function () {
        var emoji = "";
        if (this.suit === Suit.Diamond) {
            if (this.color === Color.Red) {
                emoji = "🟥♦️";
            }
            else {
                emoji = "⬛️♦";
            }
        }
        else if (this.suit === Suit.Club) {
            if (this.color === Color.Red) {
                emoji = "🟥♣️";
            }
            else {
                emoji = "⬛️♣️";
            }
        }
        else if (this.suit === Suit.Heart) {
            if (this.color === Color.Red) {
                emoji = "🟥❤️";
            }
            else {
                emoji = "⬛️❤️";
            }
        }
        else if (this.suit === Suit.Spade) {
            if (this.color === Color.Red) {
                emoji = "🟥♠️";
            }
            else {
                emoji = "⬛️♠️";
            }
        }
        return "".concat(emoji, " ").concat(this.value);
    };
    return Card;
}());

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

export { Deck as default };
//# sourceMappingURL=bundle.esm.js.map
