//1

function printPositives(ele){
    if (ele >=0) {
       console.log(ele); 
    }
}


var numbers = [1, -10, 20, 40, 5];

numbers.forEach(printPositives);
printPositives(numbers);
//2

function getPositives(ele){
       return ele >= 0; 
}


//2B

function print(ele){
    console.log(ele);
}

numbers.filter(getPositives).forEach(print);

console.log(numbers);

//3

function filterArray(callback, array){
    return array.filter(callback);
}

//4

function longestWord(string){
    var words = string.split(" ");
    return words.reduce(function(a, b){
        if (b.length > a){ return b.length; }
        else { return a; }
    }, 0);
}

var testString = "The quick brown fox jumps over the laaaaaaaazy dog"

console.log(longestWord(testString));

//5

function countVowels(string){
    var letters = string.toLowerCase().split("");
    return letters.reduce(function (count, a) {
        if (a === "a" || a === "e" ||a === "e" ||a === "o" || a === "u" || a === "y"){
            return count + 1;
        }
        else {return count;}
    }, 0);
}

console.log(countVowels(testString));

//6

function highLow(array){
    var highest = array.reduce(function(a, b){
        if(a < b){return b;}
        else {return a;}
    }, -Infinity);
    
    var lowest = array.reduce(function(a, b){
        if(a > b){return b;}
        else {return a;}
    }, Infinity);
    return {highestNumber: highest, lowestNumber: lowest};
}

console.log(highLow(numbers));

//7

function highLowTwo(array) {
    var twoHighLow = highLow(array);
    var secondHighest = array.reduce(function(a, b){
    if(a < b && b != twoHighLow.highestNumber){return b;}
    else {return a;}
    }, -Infinity);

    var secondLowest = array.reduce(function(a, b){
    if(a > b && b != twoHighLow.lowestNumber){return b;}
    else {return a;}
    }, Infinity);
    twoHighLow.secondHighestNumber = secondHighest;
    twoHighLow.secondLowestNumber = secondLowest;
    return twoHighLow;
}

console.log(highLowTwo(numbers));

//8
//reduce --> count number of occurences
//filter --> reduce to only the same characters

function countChars(string){
    var charCount = {
    };
    var chars = string.split("");
    chars.forEach(function(ele){
        if (charCount[ele]){
            charCount[ele] += 1;
        }
        else {charCount[ele] = 1;}
    });
    return charCount;
}

console.log(countChars(testString));
// obj.ele = obj["ele"]
// obj[function(){return "hello"}] = obj.hello
// //9

var arrayIDs = [
  {
    "id": "KeXoYg92is",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@smith.com"
  },
  {
    "id": "NkALmSWtUp",
    "firstName": "Donald",
    "lastName": "Duck",
    "email": "don@disney.com"
  },
  {
    "id": "m7LPbJYSUg",
    "firstName": "John",
    "lastName": "Vader",
    "email": "vader@darkside.com"
  }
];

function peopleByID(array){
    return array.reduce(function(ids, ele){
        ids[ele.id] = ele;
        return ids;
    }, {});
}

console.log(peopleByID(arrayIDs));

//10

function peopleByFirstName (array){
    return array.reduce(function(name, ele){
        if (name[ele.firstName]){
            name[ele.firstName].push(ele);
        } else {
            name[ele.firstName] = [ele];
        }
        return name;
    }, {});
}

console.log(peopleByFirstName(arrayIDs));

//Exercise 11

