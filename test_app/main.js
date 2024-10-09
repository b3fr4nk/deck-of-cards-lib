import Deck from "../dist/bundle.esm.js"
import * as readline from "node:readline/promises"; // This uses the promise-based APIs
import { stdin as input, stdout as output } from "node:process";

const deck = new Deck(false, true)
deck.shuffle()

const rl = readline.createInterface({ input, output });

const answer = await rl.question("Pick a number between 1 and 10: ")

let card = null

for( let i = 0; i< answer; i++) {
    card = deck.draw()
}

console.log(`Your card is the ${card.toEmoji()}`)