const fs = require('fs');
const data = "Tony Stark"
fs.writeFile('4-write-to-file.md', data, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('Data written to file successfully.');
  });

  fs.readFile('4-write-to-file.md',"utf8",(err,data)=>{
    if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log(data);
  })