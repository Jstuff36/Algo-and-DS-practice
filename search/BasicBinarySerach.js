const search = (nums, target) => {
    let left = 0;
    let right = nums.length;
    while (left <= right) {
        const mid = parseInt((left + right) / 2);
        if (target === nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9) === 4);
console.log(search([-1, 0, 3, 5, 9, 12], 2) === -1);