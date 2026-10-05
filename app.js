const stringUtils = require("./stringUtils");

console.log(stringUtils.capitalize("javascript"));
console.log(stringUtils.reverse("hello"));
console.log(stringUtils.contains("JavaScript modules", "modules"));
console.log(stringUtils.contains("JavaScript modules", "Python"));

console.log(stringUtils.capitalize(""));
console.log(stringUtils.reverse(undefined));
console.log(stringUtils.contains(undefined, "test"));