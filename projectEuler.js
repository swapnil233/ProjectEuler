//------------------------------------------------QUESTION 1------------------------------------------------//
console.log(
  "question 1: Find the sum of all the multiples of 3 or 5 below 1000."
);

/*
Strategy:
1. have an outside variable starting at 0
2. everytime the loop runs and finds a number %3 and %5, add that number to sum and make new number = sum.
3. repeat till <1000 (not <=)
*/

var s = 0;
for (var a = 0; a < 1000; a++) {
  if (a % 3 === 0 || a % 5 === 0) {
    s += a;
  }
}
console.log(s);

//-----------------------------------------------QUESTION 2------------------------------------------------//
console.log(
  "Question 2: By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms:"
);

/*
Strategy:
1. 
2. 
3. 
*/

//Algorithm:


//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
