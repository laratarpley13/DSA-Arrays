//URLify a string
const urlify = function(url) {
    let store = url.split(" ");
    const newUrl = store.join("%20");
    return newUrl;
}

//console.log(urlify("www.thinkful.com /tauh ida parv een"));

const filter = function(array) {
    const store = [];
    for(let i=0; i<array.length; i++) {
        if(array[i] >= 5) {
            store.push(array[i])
        }
    }
    return store;
}

//console.log(filter([13,1,2,3,4,5,6,7,8,9,10,11,12,13]));

const maxSum = function(array) {
    let maxSum = 0;
    for(let i=0; i<array.length - 1; i++) {
        for(let j=1; j<array.length; j++) {
            let sum = array[i] + array[j];
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }
    return maxSum
}

//console.log(maxSum([4, 6, -3, 5, -2, 1]))

const removeCharacters = function(string, characters) {
    let newString = "";
    for(let i=0; i<string.length; i++){
        if(!characters.includes(string[i])) {
            newString += string[i];
        }
    }
    return newString;
}

//console.log(removeCharacters("Battle of the Vowels: Hawaii vs. Grozny", "aeiou"))

const products = function(array) {
    let workingArray = array.map(number => number);
    let store = [];

    for(let i=0; i<array.length; i++) {
        workingArray = array.map(number => number);
        let product = 1
        workingArray.splice(i, 1);
        for(let j=0; j<workingArray.length; j++) {
            product = product * workingArray[j];
        }
        store.push(product);
    }
    return store
}

//console.log(products([1, 3, 9, 4]));

/* const makeZero = function(array) {
    for(let i=0; i<array.length; i++) {
        for(let j=0; j<array[i].length; j++) {

        }
    }
} */