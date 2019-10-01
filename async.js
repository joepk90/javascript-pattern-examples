 /**
 * Javascript Pattern: Async and Await
 */
async function displayCommits() {
    
    try {
        const user = await getUser(1); 
        const repos = await getRepositories(user.getRepositories);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    } catch (err) {
        console.log('Error', err.message);
    }
}

displayCommits();