const fs= require('fs');

// fs.readFile('file.txt','utf8',(err,data)=>{  // non blocking i/o model
//     console.log(err,data);
// })

// const a=fs.readFileSync('file.txt');
// console.log(a.toString);

// fs.writeFile('file.txt',"This is a data",()=>{
//     console.log("written to the file")
// })

const b=fs.writeFileSync('file.txt',"This is a data");
    // console.log("written to the file")
console.log(b)


console.log("Finished reading file");