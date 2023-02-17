//Q7.Write a program to find the most frequent item of an array

function mostFrequentItem(array) {
    if (array.length === 0) {
      return null; // i have used it to handle empty array
    }
  
    let maxCount = 0;
    let maxItem = null;
  
    for (let i = 0; i < array.length; i++) {
      let count = 1;
  
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] === array[i]) {
          count++;
        }
      }
  
      if (count > maxCount) {
        maxCount = count;
        maxItem = array[i];
      }
    }
  
    return maxItem;
  }

  let array = [1, 2, 3, 3, 3, 4, 4, 5, 5];
console.log(mostFrequentItem(array));

/*OUTPUT
3
*/

