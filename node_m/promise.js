const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: id, user: "name" });
    }, 2000);
  });
};

getUser(1).then((res) => console.log(res));
console.log("After promise");
