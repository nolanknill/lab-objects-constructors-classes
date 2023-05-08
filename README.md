## Getting Started

In this lab you will be writing code in `script.js` and running it by opening
`index.html` in the browser or refreshing the page. Check your results (or
errors) in the Chrome inspector. To keep your lab more organized, you might like
to put each exercise inside its own folder.

## Instructions

### Part 1

1. Write a `Burger` class that has three properties that will be set in the `constructor` method:
   - `toppings`: an array of string values for each burger topping
   - `protein`: a string indicating the burger's type of protein
   - `containsGluten`: a boolean indicating if the burger is gluten-free
  
2. Add a `describe` method to the `Burger` class that prints a description of the protein and toppings

3. Create two instances of the `Burger` class (recall the syntax for creating a `new` instance of a class). When creating each new Burger, try adding different toppings and proteins, along with varying the gluten-free option.

4. `console.log` the two instances to your browser's console to inspect their properties
   - Note the properties that you set in the constructor
     - Toppings, protein, containsGluten
   - Also note the prototype property that was added automatically (you might
     have to click the right arrow "›" to expand the list of properties)

5. If you call each burger instance's `describe` method, what would you expect to see in the console? Now invoke each burger instance's `describe` method and validate your assumption by checking the output in the console.

### Part 2

1. Create a class called `BurgerWithSide` that:
   - Extends the `Burger` class
   - Adds a `side` string property that describes the burger's side dish
   - Adds a method called `friesWithThat()` that returns `true` if the side is "fries", also try using the **string method** `.toLowerCase()` for your method to also work if the string is "Fries" e.g. has any uppercase letters

2. Test your class by constructing a new `BurgerWithSide`
   - Test the methods defined in the base `Burger` class
   - Test your new `friesWithThat()` method

## Resources

- [MDN: JavaScript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [MDN: Extending Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Sub_classing_with_extends)
