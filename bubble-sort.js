function bubbleSort(arr){
   const length = arr.length;
   let isSwapped = false;

    for(let i = 0; i < length;i++){
        for(let j = 0; j < length; j++){
            if(arr[j] > arr[j+1]){
                //swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
              isswapped = true;
            }
        }
        if(isSwapped) break;
    }
    return arr;
}

let a = [99,44,6,2,1,5,63,87,283,4,0];
console.log('unsorted - ',a);
console.log('sorted - ',bubbleSort(a));