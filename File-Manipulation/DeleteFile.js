let fs = require('fs')
//Aynchronours js
fs.unlink('./newCreated',(err)=>{
    if(err){
        console.log('file not found....')
    }else{
        console.log("successfully delete");
    }
})