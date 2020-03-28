function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, firstIdx, secondIdx) => {
        [arr[firstIdx], arr[secondIdx]] = [arr[secondIdx], arr[firstIdx]];
    };
    let pivot = arr[start];
    let swapIndex = start;
    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);
    console.log(arr);
    return swapIndex;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        let pivotIdx = pivot(arr, start, end);
        quickSort(arr, start, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, end);
    }
    return arr;
}

quickSort([4, 6, 9, 1, 2, 5]);
