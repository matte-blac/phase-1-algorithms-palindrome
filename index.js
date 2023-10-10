function isPalindrome(word) {
  let len = word.length // Get the length of the word
  let mid = Math.floor(len/2) // Calculate the midpoint of the word

  for ( let i = 0; i < mid; i++){ // Loop through each character in the word up to the midpoint
    if (word[i] !== word [len - 1 - i]) { 
      // If the character and its mirror
      // image in the word are not the, return false
      return false
    }
  } // If all characters up to the midpoint have a mirror
  // image, return true
  return true
}

/* 
  Add your pseudocode here
  Procedure isPalindrome takes a word as input
  Set len to the length of the word
  Set mid to the floor division of len by 2

  For each index i from 0 to mid
    If the character at index i in word is not equal
    to the character at index (len - 1 - i) in word
      Return false

  Return true
End Procedure

*/

/*
  Add written explanation of your solution here
Calculate Length: let len = word.length - This step determines the total number of characters in the input word.

Find Midpoint: let mid = Math.floor(len/2) - This step calculates the midpoint of the word. If the word’s length is odd,
it rounds down to the nearest whole number.

Loop Through Characters: for ( let i = 0; i < mid; i++) - This loop iterates over each character in the word up to the 
midpoint. It starts from the first character and continues up to but not including the midpoint.

Compare Characters: if (word[i] !== word [len - 1 - i]) - Inside the loop, this step checks if the current character 
and its mirror image in the word are not the same. If they aren’t, it means that the word is not a palindrome, so it 
returns false and exits the function.

Return Result: return true - If all characters up to the midpoint have a mirror image (they are identical when read 
forward and backward), then it means that the word is a palindrome, so it returns true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
