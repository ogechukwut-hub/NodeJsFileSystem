const fspromises = require('fs').promises;
const path = require('path');



const  fileops= async ()=>{
try{
const data=await fspromises.readFile(path.join(__dirname,'files','starter.txt'),'utf8');
await fspromises.unlink(path.join(__dirname,'files','starter.txt'))
await fspromises.writeFile(path.join(__dirname,'files','newlywrittenfiles'),data);
await fspromises.appendFile(path.join(__dirname,'files','newlywrittenfiles'),'\n\nhi whatsup how is every thing going');
await fspromises.rename(path.join(__dirname,'files','newlywrittenfiles'),path.join(__dirname,'files','renamed.txt'));
const newdata=await fspromises.readFile(path.join(__dirname,'files','renamed.txt'),'utf8');
console.log(newdata);

}catch(err){
   console.error(err);
}
}
fileops()





// fs.writeFile(path.join(__dirname,'files','reply.txt'),'hey i wrote htis file in node js using a callback',(err) => {




