const http = require("http");
const fs = require("fs");
const date = new Date().toTimeString();
const log = fs.createWriteStream("req.log", { flags: "a" });

const localhost = "localhost";
const port = 8080;



const requireListener = function(req,res){
    res.writeHead(300);
    let url = req.url
    if (url == '/' || url == '/homepage') {

        res.write("<h1>Home Page<h1>");
        
        
        log.write(`Home Page Request Time =>> ${date}`)
        log.write(`Home Page Request End Time =>> ${date}`)
        console.log("HomePage")  
       
    
      } else if (url == '/aboutus') {
    
        res.write("<h1>About us<h1>");
        
        
        log.write(`\nAbout Us Page Request Time =>> ${date} `)
        log.write(`About Us PageRequest End Time =>> ${date}`)
        console.log("AboutusPage")
      
      }
      else if(url == "/contact"){

        res.write("<h1>Contact<h1>")
        
        
        log.write(`\nContact Page Request Time =>> ${date} `)
        log.write(`Contact Page Request End Time =>> ${date}`)
        console.log("ContactPage")
        
      }
      
      
    else {
    
      
    
        res.write('<h1>404 Not Found Page<h1>');
        
        
        log.write(`\nError Page Request Time =>> ${date} `)
        log.write(`Error Page Request End Time =>> ${date}`)
        console.log("404 Not found Page")
        
    
    }
    
    res.end();
    
   
    
   
    
};
const server = http.createServer(requireListener);


server.listen(port, localhost, () => {
    console.log(`Server run..... ${localhost}:${port}`);
});


