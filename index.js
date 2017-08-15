const emoji = require('node-emoji');
let emojiArray = [];
let num = 12;

for (var i = 0; i < num; i++) {
  emojiArray.push(emoji.random());
}

function loopEmojis (emojiArray) {
  for (var i = 0; i < emojiArray.length; i++) {
    console.log(emojiArray[i].emoji);
  }
};

loopEmojis(emojiArray);
