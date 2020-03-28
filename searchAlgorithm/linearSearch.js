function linearSearch(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}

linearSearch([34, 555, 44, 2, 5, 234], 2);
