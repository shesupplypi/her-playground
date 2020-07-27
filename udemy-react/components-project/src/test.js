
const a = [2, 1, 3, 5, 3, 2]

function firstDuplicate(a) {
    let newArr=[];
    for(let i=0; i < a.length-1; i++) {
        for(let j=i+1; j < a.length; j++) {
            if(a[i] === a[j]) {
                newArr.push(a[i]);
            } else {
                newArr.push(-1);
            }
        }
    }
     return(newArr)
     
 }

console.log(firstDuplicate(a))
