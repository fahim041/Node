function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: id, username: "user" });
    }, 2000);
  });
}

function getRepo(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["commit"]);
    }, 2000);
  });
}

getUser(1).then((user) => {
  getRepo(user.username).then((repos) => {
    getCommits(repos).then((commit) => {
      console.log(commit);
    });
  });
});

module.exports = {
  getUser,
  getCommits,
  getRepo,
};
