/* Write a function Solution that, given a string S of length N, returns anz palindrome which 
can be obtained by replacing all of the question marks
 in S by lowercase letters ('a'-'z'). 
 if no palindrome can be optained, the function should return the string "NO". */

 const isPalindrome = (str) => str.split('').reverse().join('') === str

    const replaceQuestionMarks = (S) => {
        const modifiedStrings = Array.from({ length: 26 }, (_, i) => {
            const replacedChar = String.fromCharCode('a'.charCodeAt(0) + i);
            return S.split('').map(char => (char === '?' ? replacedChar : char)).join('');
        });
    
        const result = modifiedStrings.filter(isPalindrome)

        console.log(result[0])
    
        return result.length > 0 ? result[0] : 'NO';
    }
    
    console.log(replaceQuestionMarks('?a?')); // bab