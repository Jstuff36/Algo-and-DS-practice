const moveDisk = (start, destination, buffer, n) => {
    if (n === 0) {
        return;
    }
    // Move n - 1 disk from souce to buffer
    moveDisk(start, buffer, destination, n - 1);
    // move bottom (largest) disk from source to destinination
    destination.push(start.pop());
    // now move n - 1 disk from buffer to destination
    moveDisk(buffer, destination, start, n - 1);
    return destination;
}

console.log(moveDisk([1, 2, 3, 4], [], [], 4));