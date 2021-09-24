function isPalindrome(str) {

    const reverseWord = word.split('').reverse().join('');
    
    if(word == reverseWord) {
        console.log(""+inputWord+" is a palindrome");
    } else {
        console.log(""+inputWord+" is not a palindrome");
    }
}

const inputWord = prompt('Input a word: ');

const word = inputWord.toLowerCase();

isPalindrome(word);