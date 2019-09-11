
// create function 
function flattenArray(input) {
    // print input
    console.log(`input :`, input);
    // convert string to array
    let stringArray = input.toString();

    // convert array to string
    let arrayString = JSON.parse("["+stringArray+"]");

    // print output
    console.log(`output : `, arrayString);
}

let arrayInput = [[1,2],[3,4],5,[6,7],8,9,10];
flattenArray(arrayInput);



