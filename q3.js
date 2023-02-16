//Q3:Write a JavaScript function to check whether an `input` is an array or not.


function check(array)
{
    if(Array.isArray(array))
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log(check(1,2,3,4));
console.log(check([1,2,3,4,4,5]));

/*output
false
true
*/