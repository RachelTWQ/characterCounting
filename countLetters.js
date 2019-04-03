function countLetters(inputString){
    let countObj = {};
    // let inputArray = inputString.toLowerCase().split(" ");
    let input = inputString.toLowerCase().split(" ").join("");
    // for (let i = 0; i < inputArray.length; i++){
    //     let newArray = [];
    //     if(!countObj[inputArray[i]]){
    //         countObj[inputArray[i]] = newArray.push(inputArray[i]);
    //     } else {
    //         countObj[inputArray[i]] = inputArray.push(inputArray[i]);
    //     }
    // }
    for (let j = 0; j < input.length; j++){
        if(!countObj[input[j]]){
        countObj[input[j]] = 1;
        } else {
            countObj[input[j]]++;
        }
    }
    return countObj;
}

console.log(countLetters("lighthouse in the house"));