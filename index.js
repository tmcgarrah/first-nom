const emoji = require('node-emoji');
const http = require('http');
const server = http.createServer((req, res) => {
  res.write(emoji.random().emoji + '\n');
  res.end();
});

server.listen(8001);

let emojiArray = [];
let num = 12;

for (var i = 0; i < num; i++) {
  emojiArray.push(emoji.random().emoji);
}

// function loopEmojis (emojiArray) {
//   for (var i = 0; i < emojiArray.length; i++) {
//     console.log(emojiArray[i].emoji);
//   }
// };

//loopEmojis(emojiArray);
