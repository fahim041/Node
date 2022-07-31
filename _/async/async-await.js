const promises = require("./promise-user");

async function displayCommit() {
  try {
    const user = await promises.getUser(1);
    const repos = await promises.getRepo(user.username);
    const commits = await promises.getCommits(repos[0]);

    console.log(commits);
  } catch (err) {
    console.log(err.message);
  }
}

displayCommit();
