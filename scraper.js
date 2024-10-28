
	//Handle Errors<>
const axios = require ("axios");
const cheerio = require("cheerio");
const fs = require("fs");

var content = "";
let htmlCode = "";
//Link stored in link.txt file
let filestream = fs.createReadStream(require("path").resolve(__dirname,"link.txt"));

filestream.setEncoding("UTF-8");

filestream.on("data",(data)=>{
	content += data;
	});

filestream.on("end",(err)=>{
	console.log("----SNIPPET----\n");
	
	harvest().then($ => {
		htmlCode += $.html();
	    let findUniqueName = content.split("://");
	    fs.writeFile(findUniqueName[1],$.html(),(err)=>{
		err? console.log("Unique Name Error"): console.log("You can find your scraped Code in Your working directory");
		})
      //Once Code has been stored, Read code again from file
console.log($.html())
//console.log(findUniqueName)
}).catch (err => console.error("Filestream event error Caught"));
	
	});
	
filestream.on("error",(err)=>{
	console.log(` Read Stream Error!!!!`);
	});
	
	
async function harvest(){
	try{
		const {data} = await axios.get(content);
		return cheerio.load(data);
	 }catch(err){
		console.error("Error processing async func()");
		}
};

//harvest().then($ => console.log($.html()))
