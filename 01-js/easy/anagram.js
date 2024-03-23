/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let n1 = str1.length;
  let n2 = str2.length;
str1=str1.toLowerCase();
str2=str2.toLowerCase();
  if (n1 != n2) {
      return false;
  }

  // Convert strings to arrays to use the sort() method
  let arr1 = str1.split('').sort();
  let arr2 = str2.split('').sort();

  for (let i = 0; i < n1; i++) {
      if (arr1[i] !== arr2[i]) { // Use strict equality operator '!=='
          return false;
      }
  }
  return true;
}

module.exports = isAnagram;
