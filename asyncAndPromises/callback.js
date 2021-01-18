// Callback hell
new Promise((resolve, reject) => {
    function printStringCb(string, callback) {
        setTimeout(
            () => {
                console.log(string)
                if (callback) {
                    callback();
                }
            },
            100 // 1s
        )
    }

    const arr = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    let i = 0;
    const recursive = () => printStringCb(arr[i++], i < 26 ? recursive : resolve );
    recursive();
    // The above code is a generic version of the following 3 function calls
    // printStringCb('a', () => {
    //     printStringCb('b', () => {
    //         printStringCb('c', resolve)
    //     })
    // })
}).then(() => {
    // With Promises
    function printStringPromise(string) {
        return new Promise((resolve, reject) => {
            setTimeout(
                () => {
                    console.log(string)
                    resolve()
                },
                100
            )
        })
    }
    console.log('WITH PROMISES');
    return printStringPromise('a')
        .then(() => printStringPromise('b'))
        .then(() => printStringPromise('c'))
}).then(() => {

    function printStringPromise(string) {
        return new Promise((resolve, reject) => {
            setTimeout(
                () => {
                    console.log(string)
                    resolve()
                },
                100
            )
        })
    }
    console.log("WITH ASYNC/AWAIT");
    return (async () => {
        await printStringPromise('A');
        await printStringPromise('B');
        await printStringPromise('C');
    })();
}).then(() => {
    const makeApiCalls = async (tries, cb) => {
        while (tries > 0) {
            try {
                const response = await fetch('/fake-url');
                const data = await response.json();
                if (data) {
                    cb(data);
                    return;
                }
                tries--;
            } catch (error) {
                tries--;
            }
        }
        console.log(`Exiting after ${tries} tries`)
    }
    makeApiCalls(3, () => console.log('Success'));
 })

