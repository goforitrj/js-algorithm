function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigit = 0;
    for (let i = 0; i < nums.length; i++) {
        //         if(maxDigit < digitCount(nums[i])) {
        //             maxDigit = digitCount(nums[i]);
        //         }
        maxDigit = Math.max(maxDigit, digitCount(nums[i]));
    }
    return maxDigit;
}

function radixSort(nums) {
    for (let i = 0; i < mostDigits(nums); i++) {
        let arrs = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < nums.length; j++) {
            arrs[getDigit(nums[j], i)].push(nums[j]);
        }
        //          nums = [...arrs];
        nums = [].concat(...arrs);
    }
    return nums;
}
radixSort([12, 1231, 445, 229]);
