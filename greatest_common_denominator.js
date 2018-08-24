
const greatestCommonDenominator = (num1, num2, sorted_input=null, index=1, results=[]) => {
  // Sort them by the lower of the two and set them
  if (!sorted_input) {
    sorted_input = [num1, num2].sort((a, b) => { return a - b })
  }
  
  
  if (index <= sorted_input[0]) {
    // Divide by numbers starting from 1 until we reach the lowest number, accumulating the results
    if (num1 % index === 0 && num2 % index === 0) {
      debugger
      results.push(index);
      index++;
      greatestCommonDenominator(num1, num2, sorted_input, index, results);
    } else {
      index++;
      greatestCommonDenominator(num1, num2, sorted_input, index, results);
    }
  } else {
    results = results.sort((a,b) => { return b - a });
    console.log(results[0])
    return results[0]
  }

  // base case: sort array of results to get the largest
}

greatestCommonDenominator(9, 12); // => 3
greatestCommonDenominator(24, 6); // => 6
greatestCommonDenominator(120, 2); // => 2
