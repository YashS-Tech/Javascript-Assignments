// Q1:Write a function that accepts two arrays and returns the missing element from the smaller array
    
    
function findMissingElement(array1, array2) {
    if (array1.length > array2.length) {
      [array1, array2] = [array2, array1]; // I have used this to swap arrays ,so arr1 is always the smaller one
    }
    for (let i = 0; i < array2.length; i++) {
      if (!array1.includes(array2[i])) {
        return array2[i];
      }
    }
    return null; // for no missing element found
  }
    
  //array filter method
  function findMissingElement(array3, array4) {
    if (array3.length > array4.length) {
      
      [array3, array4] = [array4, array3];  // I have used these to swap the arrays if array3 is bigger than array4
    }
    
    //I have used filter method to return the missing element in array4
    let missingElement = array4.filter(element => !array3.includes(element))[0];
    
    return missingElement;
  }

  let array3 = [7,6,4,2];
  let array4 = [6,4,7,2,1];
    
   let array1=[7,6,4,2]
    let array2=[6,4,7,2,1]
    
    console.log(findMissingElement(array1,array2));
    console.log(findMissingElement(array3, array4));

/*output
3git
*/

