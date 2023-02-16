/*Q4:Write a JavaScript function to get the first n element of an array. If n is not provided, return the
first element.*/

function getFirstNElements(array, n=1) {
    if (n === 1) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }


  const myArray = [1, 2, 3, 4, 5];

  console.log(getFirstNElements(myArray)); // returns 1
  console.log(getFirstNElements(myArray, 3)); // returns [1, 2, 3]



/*output:
1
[ 1, 2, 3 ]
*/