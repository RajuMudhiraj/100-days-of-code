

function hourglassSum(arr) {

    let maxSum = -64;

    function sumTheHourglass(ar, i, j) {
        return (arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2])
    }

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr[i].length - 2; j++) {
            if (maxSum < sumTheHourglass(arr, i, j)) {
                maxSum = sumTheHourglass(arr, i, j)
            }
        }
        
        console.log(maxSum)
    }
    return maxSum;

}

const arr = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]

hourglassSum(arr)