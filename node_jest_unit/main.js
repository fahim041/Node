const absolute = (number) => {
  console.log(number);
  if (number > 0) return number;
  if (number < 0) return -number;
  return 0;
};

const f = absolute(-5);
console.log(f);
