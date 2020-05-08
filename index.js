const fs = require("fs"); //file-system module included

const textIn = fs.readFileSync("./txt/input.txt", "utf-8"); //open file and read it with a utf-8 format
console.log(textIn);

//const textOut = `` 'this is: ' + textIn;  //old methode
//const textOut = `This is what we know about the avocado: ${textIn}`; //${textIn}. ile ek özelliklere erişim de var
const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`; //.\n = new line
//console.log(textOut);

fs.writeFileSync("./txt/output.txt", textOut);
console.log("File written!");
