function countingValleys(steps, path) {
    
    path = path.split("")
    
    let isEnteredVally = false;
    let vallies = 0;
    let alt = 0;
    
    for (let i = 0; i< path.length; i++){
        if (path[i] == 'U'){
            alt++
            if(alt == 0){
                vallies++
            }
        }
        else{
            alt--
        }
    }
    
    return vallies
    // Write your code here

}