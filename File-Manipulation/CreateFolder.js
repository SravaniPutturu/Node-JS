let fs = require('fs')
//Aynchronours js
fs.mkdir('./File-Manipulation',(err,data)=>{
    if(err){
        console.log('folder not created....')
    }else{
        console.log("folder created");
    }
})


//read folder structure by- readdir