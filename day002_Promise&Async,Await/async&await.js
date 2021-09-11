async function nestedTimeout() {
    let tOut1, tOut2, tOut3;
    
    tOut1 = new Promise(function (myResolve, myReject) {
        setTimeout(function () {
            tOut2 = new Promise(function (myResolve, myReject) {
                setTimeout(function () {
                    tOut3 = new Promise(function (myResolve, myReject) {
                        setTimeout(function () { myResolve("3"); }, 1000);
                    });
                    myResolve("2");
                }, 2000);
            });
            myResolve("1");
        }, 3000);
    });



    console.log(await tOut1, await tOut2, await tOut3)


}

nestedTimeout()
