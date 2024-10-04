export var Suit;
(function (Suit) {
    Suit["Heart"] = "heart";
    Suit["Spade"] = "spade";
    Suit["Club"] = "club";
    Suit["Diamond"] = "diamond";
    Suit["Joker"] = "joker";
})(Suit || (Suit = {}));
export var Color;
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
export default Card;
