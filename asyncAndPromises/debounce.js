const debounced = (fn, timer) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn(...args);
        }, timer)
    }
}

const test = () => console.log('hello');
const debouncedTest = debounced(test, 100);
debouncedTest();
debouncedTest();
debouncedTest();