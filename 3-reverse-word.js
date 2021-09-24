function reverseWord(str) {
  const word = str.split(" ");
  let arrWord = [];

  const capitalWord = (string) =>
    string.charAt(0) === string.charAt(0).toUpperCase();
  const capitalFirstChar = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);
  const reverseWords = (string) =>
    string.toLowerCase().split("").reverse().join("");

  for (let words of word) {
    if (capitalWord(words)) {
      arrWord.push(capitalFirstChar(reverseWords(words)));
    } else {
      arrWord.push(reverseWords(words));
    }
  }

  console.log(arrWord.join(" "));
}

const result = prompt("Enter words: ");
console.log(reverseWord(result));
