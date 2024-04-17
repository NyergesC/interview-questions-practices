/* : Everyone has a favorite number. Jacob's favorite number is X and Jayden's favorite number is Y.
 A non-empty array A consisting of N integers is given. Jacob and Yanden are interested in occurrences of their favorite numbers X and Y in array. 
 They are looking for the longest leading fragment (prefix) of array A in which there is an equal number of occurrences of X and Y. 
 More formally, they are looking for the largest P, 
such that 0 <= P < N and the number of occurrences of X equals the number of occurences of Y in the sequence A[0], A[1], ..., A[P]. */

// Given example:
/* function solution(X, Y, A) {
    var N = A.length;
    var result = -1;
    var nX = 0;
    var nY = 0;
    for (var i = 0; i < N; i++) {
        if (A[i] == X)
            nX += 1;
        else if (A[i] == Y)
            nY += 1;
        if (nX == nY)
            result = i;
    }
    return result;
} */

function solution(X, Y, A) {
    var N = A.length;
    var result = -1;
    var nX = 0;
    var nY = 0;

    for (var i = 0; i < N; i++) {
        if (A[i] == X)
            nX += 1;
        else if (A[i] == Y)
            nY += 1;

        if (nX == nY) {
            result = i; // Update the result only when counts are equal
        }
    }

    return result;
}

console.log(solution(4, 4, [1, 5, 3, 4, 4])) // 4