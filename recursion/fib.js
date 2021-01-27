const getNFibNumbers = (n) => {
    if (n === 1) {
        return [0, 1]
    } else if (n === 0) {
        return [0];
    }
    const arr = getNFibNumbers(n - 1);
    arr[n] = arr[n - 1] + arr[n - 2];
    return arr;
}

console.log(getNFibNumbers(10));

const findNthFibNumber = (n, cache = {}) => {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    if (cache[n] !== undefined) {
        return cache[n];
    }
    cache[n] = findNthFibNumber(n - 2) + findNthFibNumber(n - 1);
    return cache[n]
};

console.log(findNthFibNumber(10));