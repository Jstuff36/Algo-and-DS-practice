const moveDisk = (start, destination, buffer, n) => {
    if (n === 0) {
        return;
    }
    moveDisk(start, buffer, destination, n - 1);
    destination.push(start.pop()); // move base disk
    moveDisk(buffer, destination, start, n - 1);
    return destination;
}

console.log(moveDisk([1, 2, 3, 4], [], [], 4));