let fs = require('fs')
//Aynchronours js
fs.rmdir('./File-Manipulation',(err,data)=>{
    if(err){
        console.log('folder not deleted....')
    }else{
        console.log("folder deleted");
    }
})