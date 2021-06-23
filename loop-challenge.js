let number = 100;

for (let number = 100; number <= 200; number++) {
  if ((0 === number % 3) && (0 === number % 4)) {
    console.log("LoopyLighthouse");
  } else if (0 === number % 4) {
    console.log("Lighthouse");
  } else if (0 === number % 3) {
    console.log("Loopy");
  } else {
    console.log(number)
  }
}