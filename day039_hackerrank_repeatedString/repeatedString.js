let s = "aba";
let n = 10;

console.log(repeatedString(s, n))

function repeatedString(s, n) {
    // Converting the string into an array.
    s = s.split("")

    // a variable to hold the count of occurances of letter 'a'
    let count = 0;

    // Counting the occurences using for loop
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            count++
        }
    }

    count += count * (Math.floor(n / s.length - 1))

    if (n % s.length > 0) {
        let surplusString = s.splice(0, n % s.length)
        console.log(surplusString)

        for (let j = 0; j < surplusString.length; j++) {
            if (surplusString[j] === 'a') {
                count++
            }
        }

    }
    return count
}