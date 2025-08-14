// Arguments in promises
const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Operation was successful!");
    } else {
        reject("Operation failed.");
    }
});

myPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });

// Async/Await
const asyncFunction = async () => {
    try {
        const message = await myPromise;
        console.log(message);
    } catch (error) {
        console.error(error);
    }
};

asyncFunction();

// Copying the promise
const copiedPromise = myPromise.then((message) => {
    console.log("Copied:", message);
});

// Handling the copied promise
copiedPromise
    .then((message) => {
        console.log("Copied:", message);
    })
    .catch((error) => {
        console.error("Copied error:", error);
    });

// complex promise
const complexPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Complex operation was successful!");
    } else {
        reject("Complex operation failed.");
    }
});

// Handling the complex promise
complexPromise
    .then((message) => {
        console.log("Complex:", message);
    })
    .catch((error) => {
        console.error("Complex error:", error);
    });