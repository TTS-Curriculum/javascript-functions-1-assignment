// Unless you are very confident in your JS skills
// There is no need to worry about the code below for now :)


// Define the function to display the sum in the DOM
function displaySum(sum) {
  const resultDiv = document.createElement("h2");
  resultDiv.innerText = `The sum of the two numbers is: ${sum}`;
  document.querySelector("form").appendChild(resultDiv);
}

// Add an event listener to the form submit button
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload
  const num1 = parseInt(document.querySelector("#num1").value);
  const num2 = parseInt(document.querySelector("#num2").value);
  // Call the testNumberAdder function
  if (testNumberAdder()) {
    //Add the numbers
    let result = numberAdder(num1, num2);
    displaySum(result);
  }
});

// Define tests for the numberAdder function
function testNumberAdder() {
  const num1 = 5;
  const num2 = 10;

  try {
    let result = numberAdder(num1, num2);
    if (result === 15) {
      console.log("Number Adder function test passed");
      return true;
    } else {
      throw new EvalError(
        "Try looking at your function to see if it is adding the numbers properly"
      );
    }
  } catch (e) {
    if (e instanceof ReferenceError) {
      alert(
        "Please define the function 'numberAdder' If you defined the function, please ensure \
      that it is spelled correctly and is capitalized properly"
      );
      return false;
    }
    if (e instanceof EvalError) {
      alert(e.message);
      return false;
    }
  }
}
