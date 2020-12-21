const reduceAsync = async (arr, fn, initalValue) => {
    let acc = initalValue;
    for (let i = 0; i < arr.length; i++) {
        const nextValue = await arr[i]();
        acc = fn(acc, nextValue);
    }
    return acc;
};

const a = () => Promise.resolve('a');
const b = () => Promise.resolve('b');
const c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100));

(async function () {
    const result1 = await reduceAsync([a, b, c], (acc, value) => [...acc, value], []);
    console.log(`result 1, ${result1} should equal ['a', 'b', 'c']`);
    const result2 = await reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d'])
    console.log(`result 2, ${result2} should equal ['d', 'a', 'c', 'b']`);
})()
