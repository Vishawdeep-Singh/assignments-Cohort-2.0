const fs = require("fs");


    fs.readFile("a.txt","utf8",(err,data)=>{
        if (err) {
            console.error('Error writing file:', err);
            return;
          }
          console.log(`Before : ${data}`);
        strdata=data;
        let newData = strdata.replace(/\s/g,'')
        fs.writeFile("a.txt",newData,(err)=>{
            if (err) {
                console.error('Error writing file:', err);
                return;
              }
              console.log("Updated succuessfully");
              fs.readFile("a.txt","utf8",(err,data)=>{
                if (err) {
                    console.error('Error writing file:', err);
                    return;
                  }
                  console.log(`After : ${data}`);
                
            });
        })
        
    });
 





// We can also use synchronous file reading

