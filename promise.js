/**
 * Javascript Pattern: Promise
 */


/**
 * Basic Promise Example
 */
const p = new Promise(function(resolve, reject) {

    // promise pending
    // kick off async work

    setTimeout(() => {

        // return value to consumer of the promise
        resolve(1); // pending => resolved, fulfilled 
        reject(new Error('message')); // pending => resolved, rejected 

    }, 2000);

});

p.then(result => console.log('Result', result))
.catch(err => console.log('Error', err.message));


/**
 * Advanced Promise Example
 */
console.log('Before');

// callback hell
getUser(1, (user) => {
    getRepositories(user.gitHubUsername, (repos) => {
        getCommits(repos[0], (commits) => {
            console.log(commits);
        })
    });
});

// avoiding callback hell
getUser(1)
.then(user => getRepositories(user.gitHubUsername))
.then(repos => getCommits(repos[0]))
.then(commits => console.log(commits))
.catch(err => console.log('Error', err));

console.log('After');


function getUser(id) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('Reading Database')
            resolve({ id: id, gitHubUsername: 'Joe' });
            return;
        }, 2000);

    });
}

function getRepositories(username) {
    
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('Calling API...');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);

    });
}

function getCommits(repo) {
    
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('Calling API...');
            resolve(['commit']);
        }, 2000);

    });
}