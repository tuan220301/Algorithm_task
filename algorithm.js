const arr_input = [1,5,2,4,3]

function sortArr(arr){
    return arr.sort();
}
function maxSum(arr){
    let sum = 0;
    for(let i = 1; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum;
}
function minSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length-1; i++){
        sum = sum + arr[i]
    }
    return sum;
}
function sumArr(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum;
}
function findEvenAndOdd(arr){
    let evenArr = [];
    let oddArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evenArr.push(arr[i])
        }
        else{
            oddArr.push(arr[i])
        }
    }
    let result = 'Even value: ' + evenArr + ' / ' + 'Odd value: ' + oddArr;
    return result;
}


console.log('new arr after sort : ' + sortArr(arr_input))
console.log('max sum in arr: ' + maxSum(sortArr(arr_input)))
console.log('min sum in arr: ' + minSum(sortArr(arr_input)))
console.log('sum total arr: ' + sumArr(sortArr(arr_input)))
console.log('Min value: ' + (sortArr(arr_input)[0]))
console.log('Max value: ' + (sortArr(arr_input)[arr_input.length-1]))
console.log(findEvenAndOdd(arr_input))