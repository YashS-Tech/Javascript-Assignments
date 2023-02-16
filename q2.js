//Q2.Write a function that returns the left rotated array based on the number of rotations as input.

function rotateLeftByInput(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        let firstElement = arr.shift();		//i have used shift method to remove first element from array
        arr.push(firstElement);				//i have used push method to add that first element to the end of the array					
    }
    return arr;
}

let arr=[1,2,3,4,5];
let rotations=3;
console.log(rotateLeftByInput(arr,rotations));


/*OUTPUT:
[ 4, 5, 1, 2, 3 ]
*/
