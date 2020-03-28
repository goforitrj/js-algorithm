function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let selectedMinIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                selectedMinIdx = j;
            }
        }
        if (i !== selectedMinIdx) {
            console.log(i, selectedMinIdx);
            [arr[i], arr[selectedMinIdx]] = [arr[selectedMinIdx], arr[i]];
        }
    }
    return arr;
}

selectionSort([0, 66, 3, 2, 88, 1]);
