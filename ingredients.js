const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// while loop
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++
}

// for loop
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// for loop (backwards)
for (let j = ingredients.length -1; j >= 0; j--) {
  console.log(ingredients[j]);
}
