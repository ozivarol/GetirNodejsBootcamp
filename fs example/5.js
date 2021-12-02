const fs = require("fs")

fs.writeFile('example.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
    if (err) console.log(err);
});

fs.readFile("example.json","utf8",(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
})

fs.appendFile("example.json",'\n{"name": "Employee 2 Name", "salary": 2000}',"utf-8",(err)=>{
    if(err){
        console.log(err)
    }
})

setTimeout(() => {
    fs.unlink("example.json",(err)=>{
        if(err){
            console.log(err)
        }
        console.log("data silindi")
    })
    
}, 2000);
