const fs = require('fs');
fs.readFile("3-read-from-file.md", "utf-8", (err, data) => {
    console.log(data);
})

// ---------------------------------------------------------------------------------------------------------------------------------
const fs = require('fs');
let a = 1;
console.log(a);
// Read contents of a file
fs.readFile('-read-from-file.md', 'utf8', (err, data) => {

    console.log('File contents:', data);

    // Expensive operation

});

// Function simulating an expensive operation

// Simulate an expensive operation by iterating a large number of times
let result = 0;
for (let i = 0; i < 100; i++) {
    result += Math.random();
}
console.log('Result of expensive operation:', result);
// In this first a will print and then readfile is given to another person and then thread will be busy calculating result and when thread will be idle then it will print file text.
ß