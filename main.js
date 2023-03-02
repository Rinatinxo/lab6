//1.	Write a function that prints “Hello, World!” three times (line by line).

function helloWorld() {
    console.log("Hello, World!");
    console.log("Hello, World!");
    console.log("Hello, World!");
  }
  
  helloWorld();

  //2.	Write a function that finds a perimeter of the rectangle given by two sides. 
  function calculatePerimeter(length, width) {
    return 2 * (length + width);
  }
  
  //11.	Write a function to check whether a given number is even or odd.

  function checkEvenOrOdd(number) {
    if(number % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }

