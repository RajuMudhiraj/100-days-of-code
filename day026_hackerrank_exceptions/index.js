function main() {
    var S = Number(readLine())
    try {
        Number.isNaN(S) ? error : console.log(S)
    }
    catch (err) {
        console.log('Bad String')
    }
}