/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
    const express = require('express');
    const fs = require('fs');
    const path = require('path');
    const app = express();
    const port = 3000;
 
    
    app.get('/files', (req, res) => {
        const filePath = path.join(__dirname, 'files');
        fs.readdir(filePath, (err, files) => {
            if (err) {
                res.status(500).send('Internal Server Error');
            } else {
                res.json(files);
            }
        });
    });
    
    app.get('/file/:filename', (req, res) => {
        let filename = req.params.filename;
        const filepath = path.join(__dirname, './files', `${filename}`);
        fs.readFile(filepath, "utf8", (err, fileContent) => {
          
            if (err) {
                res.status(404).send("File not found");
            } else {
              
                res.send(fileContent);
            }

        });
    });
    app.use((req, res) => {
      res.status(404).send('Route not found');
  });
  

//   When a request comes in, Express.js will try to match the request URL against all defined routes in the order they were added.
// If the request URL doesn't match any of the defined routes, Express.js will reach this middleware because it's defined at the end of the middleware stack.
// Since this middleware doesn't have a route path specified, it will match all requests that haven't been handled by other routes.
// It then sets the HTTP status code to 404 using res.status(404), indicating that the requested resource was not found.
// Finally, it sends the string '404 Not Found' as the response body using res.send().
// This middleware ensures that any request that doesn't match a specific route will receive a 404 Not Found response, indicating that the requested resource is not available on the server.
    
    

module.exports = app;