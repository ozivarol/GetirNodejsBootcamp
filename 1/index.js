const http = require("http"); // import http
const fs = require("fs");  // import fs 
const date = new Date().toTimeString(); 
const log = fs.createWriteStream("req.log", { flags: "a" });

const localhost = "localhost";
const port = 8080;



const requireListener = function(req,res){
    res.writeHead(200);
    let url = req.url
    if (url === '/' || url === '/homepage') {

        
        log.write(`\nHome Page Request Time =>> ${date}`)
        
        log.write(`\nHome Page Request End Time =>> ${date}`)
        console.log("HomePage")
        res.end("<h1>Home Page<h1>");  
       
    
      } 
      else if (url === '/aboutus') {
    
        
        log.write(`\nAbout Us Page Request Time =>> ${date} `)
        
        log.write(`\nAbout Us Page Request End Time =>> ${date}`)
        console.log("AboutusPage")
        res.end("<h1>About us<h1>");
      
      }
      else if(url === "/contact"){

        
        log.write(`\nContact Page Request Time =>> ${date} `)
        
        log.write(`\nContact Page Request End Time =>> ${date}`)
        console.log("ContactPage")
        res.end("<h1>Contact<h1>")
        
      }
      
      
    else {
    
      
    
        
        log.write(`\nError Page Request Time =>> ${date} `)
        
        log.write(`Error Page Request End Time =>> ${date}`)
        console.log("404 Not found Page")
        res.end('<h1>404 Not Found Page<h1>');
        
    
    }
  res.end()
  
    
   
    
   
    
};
const server = http.createServer(requireListener);


server.listen(port, localhost, () => {
    console.log(`Server run..... ${localhost}:${port}`);
});


