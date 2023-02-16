// Q1:Write a function that accepts two arrays and returns the missing element from the smaller array
    
    
function findMissing(array1,array2,l1,l2)
{
        for(let i=0;i<l1;i++)
        {
            let j=0;
            for(j=0;j<l2;j++)
            
                if(array1[i]==array2[j])
                break;

                if(j==l2)
                 console.log(array1[i]);
        
         }

}   
    
    let array1=[1,4,2,5,3]
    let array2=[5,4,1,2]
    l1=array1.length;
    l2=array2.length;
    findMissing(array1,array2,l1,l2);


/*output
3
*/

