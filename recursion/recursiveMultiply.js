const recMultiply = (a, b) => {
    const smallest = a > b ? b : a;
    const largest = a > b ? a : b;
    return recHelper(smallest, largest);
}

const recHelper = (smallest, largest) => {
    if (smallest <= 0) {
        return 0;
    }
    return largest + recHelper(smallest - 1, largest);
}

console.log(recMultiply(4, 5) === 20);
console.log(recMultiply(9, 11) === 99);
console.log(recMultiply(6, 8) === 48);