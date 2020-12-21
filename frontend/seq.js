const seq = async (promises) => {
    return promises.reduce(async (previousPromise, currPromise) => {
        const acc = await previousPromise;
        const next = await currPromise();
        return [...acc, next];
    }, Promise.resolve([]));
}


const a = () => Promise.resolve('a');
const b = () => Promise.resolve('b');
const c = () => Promise.resolve('c');

(async function () {
    const result1 = await seq([a, b, c]);
    console.log(`result1: ${result1} should equal ['a', 'b', 'c']`)
    const result2 = await seq([a, c, b]);
    console.log(`result2: ${result2} should equal ['a', 'c', 'b']`)
})()
