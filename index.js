/*
1: Method Selection
javascriptconst students = [

{ name: "Alex", grade: 85, isPassing: true },

{ name: "Jordan", grade: 92, isPassing: true },

{ name: "Casey", grade: 58, isPassing: false },

{ name: "Morgan", grade: 78, isPassing: true }

];

Part A

To get an array containing only the names of passing students, 
I would use a combination of filter() and map().

First, I would use filter() to select only the student objects where isPassing is true.
This is because filter() is designed to return a new array containing only elements
that meet a specific condition. After filtering, I would use map() to transform the
remaining student objects into just their name values, since map() is meant for
transforming each element of an array into a new form.

This combination is appropriate because it separates concerns: filter() decides which
items to keep, while map() decides what data to extract.

Part B

The difference between forEach() and map() is that forEach() is used for performing actions, 
while map() is used for transforming data and returning a new array.

For this task, map() is more appropriate because the goal is to create a new array of
names. forEach() does not return a new array; it only executes a function for each
element. If forEach() were used, we would have to manually push values into another
array, which is less clean and less expressive than using map().

2: Understanding Returns
javascriptconst prices = [10, 20, 30];

const result1 = prices.forEach(price => price * 2);

const result2 = prices.map(price => price * 2);

result1 will contain undefined, while result2 will contain [20, 40, 60].

This difference occurs because forEach() does not return anything. Its purpose is to
execute a function on each element, usually for side effects such as logging or modifying
external variables. Since it returns undefined, 
assigning its result to a variable produces undefined.

On the other hand, map() returns a new array containing the values returned by the 
callback function. In this case, each price is multiplied by 2, so map() 
returns a new array with the transformed values.

I would use forEach() when i only need to perform an action, and map() 
when i need a transformed array as a result.

3: Arrow Function Syntax
Version A

numbers.map(function(n) {

return n * 2;

});

Version B

numbers.map(n => {

return n * 2;

});

Version C

numbers.map(n => n * 2);

Version A uses a traditional anonymous function, which requires the function keyword 
and an explicit return statement.

Version B uses an arrow function but still includes curly braces, 
so it also requires an explicit return keyword.

Version C uses the implicit return feature of arrow functions. When an arrow function has
only one expression and no curly braces, JavaScript automatically returns the 
result of that expression.

4: Filter vs Find
Part A

javascriptconst users = [

{ id: 1, name: "Alice" },

{ id: 2, name: "Bob" },

{ id: 3, name: "Charlie" }

];

const user = users.filter(u => u.id === 2);

console.log(user.name); // This causes an error!

console.log(user.name) causes an error because filter() always returns an array, even
if only one element matches the condition. In this case, user is an array containing one
object, not the object itself. Arrays do not have a name property, so accessing user.name
results in undefined and causes an error.

5: Method Chaining Logic
javascriptconst products = [

{ name: "Laptop", price: 1200, category: "electronics", inStock: true },

{ name: "Desk", price: 300, category: "furniture", inStock: false },

{ name: "Mouse", price: 25, category: "electronics", inStock: true },

{ name: "Chair", price: 150, category: "furniture", inStock: true },

{ name: "Keyboard", price: 75, category: "electronics", inStock: true }

];

const result = products

.filter(p => p.category === "electronics")

.filter(p => p.inStock)

.map(p => p.name);


Part A
First, the initial filter() keeps only products whose category is "electronics".
After this step, the array contains the Laptop, Mouse, and Keyboard objects.

Next, the second filter() keeps only items that are in stock. This removes any
electronics that are not available, leaving Laptop, Mouse, and Keyboard (since all are in stock).

Finally, map() transforms each remaining product object into just its name, 
resulting in an array of strings: ["Laptop", "Mouse", "Keyboard"].

Part B

The order of operations matters because each method depends on the structure of the
array produced by the previous step. If map() were placed before the filters, the array
would be transformed into strings, and the filter conditions would fail because strings do
not have properties like category or inStock. 
Therefore, the code would not work the same way.

Part C

Yes, this code could be written using a single filter() by combining both conditions into
one logical expression. This would still produce the same result.

.filter(p => p.category === "electronics" && p.inStock)
This works because both conditions are checked at the same time, 
reducing redundancy while maintaining clarity.












*/
