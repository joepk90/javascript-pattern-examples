/**
 * Promise API Examples
 */

/**
 * Resolve and Reject
 */
const resolve = Promise.resolve({id: 1});
resolve.then(result => console.log(result));

// When rejecting Promises always use error object to print call stack
const error = Promise.reject(new Error('reason for rejection...'));
error.catch(error => console.log(error));

/**
 * Promise.all and Promise.race
 */
const promiseOne = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log('Async Operation 1');
        resolve(1);
        // reject('because something failed')
    }, 2000);

});

const promiseTwo = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log('Async Operation 2');
        resolve(2);
         reject('because something failed')    
    }, 2000);
    
});

// method will return a new promise which will resolve when all promises in array have resolved
// if any promises are rejected, the final promise (Promise.all) is also considered rejected
Promise.all([promiseOne, promiseTwo])
.then(result => console.log(result))
.catch(err => console.log(err.message)); // in case one of our promies is rejected.

// use race to return the  value of the first fulfilled promise
Promise.race([promiseOne, promiseTwo])
.then(result => console.log(result))
.catch(err => console.log(err.message));