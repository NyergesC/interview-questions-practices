//find palindrome, return if true

const isPalindrome = (str) => str.split('').reverse().join('') === str

console.log(isPalindrome('racecar')) // true
