// Promises
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