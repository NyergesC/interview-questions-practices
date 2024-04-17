//find second largest value in array, return value

const secondLargestValue = (arr) => {
    if (arr.length > 2) {
        arr.sort((a, b) => b - a)[1]
        return arr[2]
    }

}

console.log(secondLargestValue([1, 5, 3, 4, 4])) // 4