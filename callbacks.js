/**
 * Asyncrynous Javascript
 * syncrynous (blocking) vs a-syncrynous (non blocking)
 */

// syncrynous (blocking) programming 
// console.log('Before');
// console.log('After');

// // a-syncrynous (non blocking) programming 
// console.log('Before');
// setTimeout(() => {
//     console.log('Database simulation')
// }, 2000);
// console.log('After');


/**
 * Asyncrynous Javascript Patterns
 * callbacks
 * promises
 * async/await
 */


/**
 * Javascript Patterns: Callbacks
 */


/**
 * Call using anonymous functions
 */
console.log('Before');

getUser(1, (user) => {
    console.log('User', user);
    getRepositories(user.gitHubUsername, (repos) => {
        console.log('Repositories...', repos);
    });
    // callback hell

});

console.log('After');

function getUser(id, callback) {

    setTimeout(() => {
        console.log('Reading Database')
        callback({ id: id, gitHubUsername: 'Joe' });
        return;
    }, 2000);

}

function getRepositories(username, callback) {
    
    setTimeout(() => {
        console.log('Calling API...');
        callback(['repo1', 'repo2', 'repo3']);
    });
    
}




/**
 * Javascript Patterns: callbacks using named functions
 */
console.log('Before');
getUser(1, getRepositories);
console.log('After');

function getRepositories(user) {
    getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(repos) {
    getCommits(repo, displayCommits)
}

function displayCommits(commits) {
    console.log(commits);
}