function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] < val) {
            start = mid + 1;
        } else if (arr[mid] > val) {
            end = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
    // add whatever parameters you deem necessary - good luck!
}

binarySearch([1, 2, 3, 4, 5], 4);
