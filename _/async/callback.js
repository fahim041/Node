console.log("starting...");
getUser(1, (user) => {
  getRepo(user.name, (repos) => {
    getCommits(repos, (commit) => {
      console.log(commit);
    });
  });
});
console.log("finish");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Pinging database");
    callback({ id: id, name: "user" });
  }, 2000);
}

function getRepo(username, callback) {
  setTimeout(() => {
    console.log("repo api for username: ", username);
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}

function getCommits(repo, callback) {
  setTimeout(() => {
    console.log("getting commits for repo: ", repo);
    callback(["commit1", "commit2"]);
  }, 2000);
}
