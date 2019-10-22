// typewriter.js will output a sentence to the conole
// one letter at a time in a single line
const sentence = 'hello there from lighthouse labs';

const delayIncrement = 50; // sets the delay between letters
let delay = 0;

// loop through each letter of the sentence
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  // the delay needs to be incremented after each letter
  // so that they don't appear all at once
  delay += delayIncrement; 
};

// a final setTimeout is used to place the new line character
setTimeout(() => {
  console.log();
}, delay);
