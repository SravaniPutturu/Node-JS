
let fs = require('fs');

let x = `new created file taken from writeFile file.`
fs.writeFile('./newCreated',x,(err)=>{
    if(err){
        console.log("Write not success");
    }else{
        console.log('Written data successfully');
    }
})