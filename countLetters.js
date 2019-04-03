function countLetters(inputString){
    let countObj = {};

    let input = inputString.toLowerCase().split(" ").join("");

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