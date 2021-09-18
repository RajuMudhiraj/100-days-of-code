function migratoryBirds(arr) {

    arr.sort(function(a,b){return a-b});
    const obj = {};
    for (let i=0; i<arr.length; i++){
        var newInput = arr[i];
        if (obj[newInput] !== undefined){
            obj[newInput]++;
        }
        else {
            obj[newInput] = 1;
        }
    }

    const ary = Object.values(obj);
    ary.sort((a,b) => {return b-a});
    const max = ary[0]

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
      }
      console.log(getKeyByValue(obj, max))
    return getKeyByValue(obj, max);

}

migratoryBirds([1,4,4,4,5,3])