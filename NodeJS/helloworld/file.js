// To start file handling in Node.js, you need to import the fs module:

const fs=require('fs');

const os = require('os');
console.log(os.cpus().length);

// Useful when you want to ensure that the file is written before the next operation.
fs.writeFileSync('test.txt', 'Hello World');
console.log('File created with content: Hello World');

// we can execute the next line code with out waiting for this async operation to complete
fs.writeFile('test_async.txt', 'Hello Async World', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('Asynchronous file created successfully');
    }
});

// fs.readFileSync() returns the content directly and blocks the code until 
// the file is read it will complete the execution then only we are able to move for next line 

const data = fs.readFileSync('test.txt', 'utf-8');
console.log('File content:', data);

// fs.readFile() requires a callback to handle the content or errors.
fs.readFile('test_async.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('Asynchronous file content:', data);
    }
});



//  appending the content with out deleting the original content in file 
fs.appendFile('test.txt', `\nLog entry at ${new Date().toISOString()}\n`, (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    } else {
        console.log('Log entry added');
    }
});




