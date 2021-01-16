const arr = [1, 2, 3, 4];
// This doesn't work because i is mutated everytime
for (var i = 0; i < arr.length; i++) {
    setTimeout(() => {
        console.log(`${i} ${arr[i]}`);
    }, 500);
}

// can fix using IIFE to rescope I
for (var i = 0; i < arr.length; i++) {
    setTimeout(((localI) => () => {
        console.log(`${localI} ${arr[localI]}`);
    })(i), 500)
}

// can fix using let because it creates a new binding on each loop
for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
        console.log(`${i} ${arr[i]}`);
    }, 500);
}