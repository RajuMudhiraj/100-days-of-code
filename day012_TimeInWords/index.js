function timeInWords(h, m) {
    const inWords1to19 = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

    const inWords20to50 = ["", "", "twenty", "thirty", "forty", "fifty"]

    var res;
    if (m <= 0) {
        res = inWords1to19[h] + " o' clock"
    }
    else if (m <= 1) {
        res = inWords1to19[m] + " minute past " + inWords1to19[h];
    }
    else if (m == 15) {
        res = "quarter past " + inWords1to19[h];
    }
    else if (m == 30) {
        res = "half past " + inWords1to19[h];
    }
    else if (m < 20) {
        res = inWords1to19[m] + " minutes past " + inWords1to19[h]
    }
    else if (m < 30) {
        m = m.toString()
        m = m.split("");
        if (m[1] == 0) {
            res = inWords20to50[m] + " minutes past " + inWords1to19[h]
        }
        else {
            res = inWords20to50[m[0]] + " " + inWords1to19[m[1]] + " minutes past " + inWords1to19[h]
        }
    }
    else if (m == 45) {
        res = "quarter to " + inWords1to19[h + 1];
    }
    else if (m > 30) {
        m = m.toString()
        m = m.split("");
        if (m[1] <= 0) {
            if (h === 12) {
                res = inWords20to50[60 - Number(m[0] + 0)] + " minutes to " + inWords1to19[1]
            }
            else {
                res = inWords20to50[60 - Number(m[0] + 0)] + " minutes to " + inWords1to19[h + 1]
            }
        }
        else if ((60 - Number(m[0] + m[1])) < 19) {
            if (h === 12) {
                res = inWords20to50[60 - Number(m[0] + m[1])] + " minutes to " + inWords1to19[1]
            }
            else {
                res = inWords1to19[60 - Number(m[0] + m[1])] + " minutes to " + inWords1to19[h + 1]
            }
        }
        else {
            if (h === 12) {
                res = inWords20to50[60 - Number(m[0] + m[1])] + " minutes to " + inWords1to19[1]
            }
            else {
                var invTime = 60 - (m[0] + m[1]);
                invTime = invTime.toString();
                invTime = invTime.split("");
                res = inWords20to50[invTime[0]] + " " + inWords1to19[invTime[1]] + " minutes to " + inWords1to19[h + 1]
            }
        }
    }
    console.log(res)
    return res;
}

timeInWords(10, 12)