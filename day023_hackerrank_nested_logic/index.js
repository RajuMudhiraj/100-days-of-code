function processData(input) {
    input = input.split("\n")
    input = input.map(element => element.split(" "))

    const d1 = Number(input[0][0])
    const m1 = Number(input[0][1])
    const y1 = Number(input[0][2])
    const d2 = Number(input[1][0])
    const m2 = Number(input[1][1])
    const y2 = Number(input[1][2])


    let fine = 0;

    if (y1 == y2 && m1 == m2 && d1 > d2) {

        fine = (d1 - d2) * 15;
    }

    else if (y1 == y2 && m1 > m2) {
        fine = (m1 - m2) * 500;
    }

    else if (y1 > y2) {
        fine = 10000;
    }

    console.log(fine)
}

// const input = "24 12 1898\n18 9 1898"

// processData(input)