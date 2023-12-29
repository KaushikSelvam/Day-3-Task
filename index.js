//1)Do the below programs in anonymous function & IIFE

//a)Print odd numbers in an array
 

(function() {
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function printOddNumbers(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
      }
    }
  }

  printOddNumbers(numbers);
})();

//c)Sum of all numbers in an array:

(function() {
  var numbers = [1, 2, 3, 4, 5];

  var sum = function(arr) {
    return arr.reduce(function(acc, num) {
      return acc + num;
    }, 0);
  };

  var result = sum(numbers);

  console.log(result);
})();

//
(function() {
  var words = ["level", "hello", "radar", "world", "civic"];

  var getPalindromes = function(arr) {
    var palindromes = [];

    arr.forEach(function(word) {
      if (word === word.split("").reverse().join("")) {
        palindromes.push(word);
      }
    });

    return palindromes;
  };

  var result = getPalindromes(words);

  console.log(result);
})();

//d)Return all the palindromes in an array

(function() {
  var words = ["level", "hello", "radar", "world", "civic"];

  var getPalindromes = function(arr) {
    var palindromes = [];

    arr.forEach(function(word) {
      if (word === word.split("").reverse().join("")) {
        palindromes.push(word);
      }
    });

    return palindromes;
  };

  var result = getPalindromes(words);

  console.log(result);
})();

//g)Remove duplicates from an array

(function() {
  var numbers = [1, 2, 3, 2, 4, 5, 3, 6];

  var removeDuplicates = function(arr) {
    var uniqueArray = [];

    arr.forEach(function(num) {
      if (uniqueArray.indexOf(num) === -1) {
        uniqueArray.push(num);
      }
    });

    return uniqueArray;
  };

  var result = removeDuplicates(numbers);

  console.log(result);
})();

//2)Do the below programs in arrow functions.

//a)Print odd numbers in an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const printOddNumbers = (arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

printOddNumbers(numbers);


//b)Convert all the strings to title caps in a string array

const stringArray = ["apple", "banana", "cherry", "date"];

const convertToTitleCase = (arr) => {
  return arr.map((str) => str.charAt(0).toUpperCase() + str.slice(1));
};

const titleCaseArray = convertToTitleCase(stringArray);

console.log(titleCaseArray);

//c)Sum of all numbers in an array

const numbers1 = [1, 2, 3, 4, 5];

const sum = (arr) => arr.reduce((acc, num) => acc + num, 0);

const result = sum(numbers);

console.log(result);


