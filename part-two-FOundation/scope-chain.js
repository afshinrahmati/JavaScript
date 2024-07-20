function test() {
  console.log(1);
  return function test2() {
    console.log(2);
    return function j() {
      console.log(3);
    };
  };
}

test()()();
