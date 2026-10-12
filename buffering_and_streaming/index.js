const fs = require("fs");

const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`,'utf-8');

ourReadStream.on("data",(partOfData) => {
    console.log(partOfData);
})