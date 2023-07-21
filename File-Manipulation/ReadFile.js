let fs = require('fs')
//Aynchronours js
fs.readFile('./topics.txt','utf8',(err,data)=>{
    if(err){
        console.log('file not found....')
    }else{
        console.log(data);
    }
})
console.log('this is Async')

// Synchronous read
//function is the synchronous version of fs.readFile and does not take a callback function as a parameter. Instead, it directly returns the contents of the file as a string (when the encoding is specified) or a buffer (when the encoding is not specified).
try {
    
    const data = fs.readFileSync('./topics.txt', 'utf8');
    console.log('Sync:', data);
} catch (err) {
    console.log('Error reading file:', err);
}
console.log('this is sync')