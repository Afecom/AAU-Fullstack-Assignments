let numbers = []; // declared an array to store number values later
let count = parseInt(prompt("How many numbers do you have in your mind? ")); // asked the user how many numbers do they want to pass

// a for loop which loops through the quantity of the numbers the user is going to pass
for(let i = 0; i < count; i++){
    let input = prompt(`Enter number ${i + 1}: `);
    let value = Number(input);

    // checks if the number the user passed is actually a number
    if (!isNaN(value)){
        numbers.push(value);
    }
    else{
        alert("The value you provided is not a number!");
        i--;
    }
}

function mean(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    let avg = sum / arr.length;
    console.log("The mean of the value you provided is " + avg);
}

mean(numbers);

function mode(arr) {
  let counts = {};
  let maxCount = 0;
  let mode = null;

  for (let num of arr) {
    // Counts each number
    counts[num] = (counts[num] || 0) + 1;

    if (counts[num] > maxCount) {
      maxCount = counts[num];
      mode = num;
    }
  }

  return mode;
}

console.log("The mode of the value you provided is " + mode(numbers));

function median(arr){
    let ordered = arr.sort((a, b) => a - b); // Sorted th array so as to compute the median

    // Checking if the array length is even or odd and solve the median of the array accordingly;
    if (arr.length * 2 == 0){
        let mdlindex = (arr.length / 2) - 1;
        let mdn = (ordered[mdlindex] + ordered[mdlindex + 1]) / 2;
        console.log("The median of the value you provided is " + mdn);
    }
    else if (arr.length * 2 != 0){
        let mdlindex = Math.floor(arr.length / 2)
        let mdn = arr[mdlindex];
        console.log("The median of the value you provided is " + mdn);
    }
}

median(numbers);