import chalk from 'chalk';
import os from 'os';
import figlet from 'figlet';
import path from 'path';
import fs from 'fs';
import read from 'readline';
import {exec} from 'child_process';

let argv = process.argv.slice(2)[0];

let urlPath = `/storage/emulated/0/javascript_proj`;
"use strict";

let log = console.log;

let urlValidate = /^(-https?:\/\/)(www\.|localhost|127\.0\.0\.1|facebook|([a-zA-Z]+\.([a-zA-Z]{2,})))\/?.*$/;

const color =(text)=>chalk.yellow(text);
	
	
function logo(txt){
		return function (col){
			
			return new Promise((resolve,reject)=>{
			figlet(`${txt}`,(err,data)=>{
		(err)? reject(err.name): resolve(col(data));
					});
			});
		}
	}
	
	
if(urlValidate.test(argv)){
	/*exec(`export url=${argv}`,(err,stdout,stderr)=>{
		err? log(err): log(stdout);
		/**Twisted Plot ðŸ˜ 
		Store the url in node env .url
Get the url from the scraper script and log the message to the console!
   
		FAILED ATTEMPT!
	});*/
	urlPath = path.resolve(urlPath,"link.txt");
	try{
	fs.writeFileSync(urlPath,argv.split("-").join(""));
	}catch(err){
		console.error("Failed To write Url to file");
		}
	
	logo("Harvester")(color).then(data => console.log(data)).catch(err => console.error("Failed to Display Logo"));
	


function catalog(){
	log(chalk.green("----------------------------------------------\n"));
	log(chalk.yellow(chalk.italic("["))+chalk.red("+")+chalk.yellow(chalk.italic("]"))+chalk.bold(chalk.blue(" Author: "))+chalk.yellow("Miracle UgbanaðŸ‘€"));
	
	log(chalk.yellow(chalk.italic("["))+chalk.red("+")+chalk.yellow(chalk.italic("]"))+chalk.bold(chalk.blue(" Version: "))+chalk.yellow("v1.0.1"));
	
	
	log(chalk.yellow(chalk.italic("["))+chalk.red("+")+chalk.yellow(chalk.italic("]"))+chalk.bold(chalk.blue(" Description: "))+chalk.yellow("</>Scraping HTML based script...."));
	log(chalk.green("----------------------------------------------\n"));
	
    log("\n");
    
    log(chalk.yellow("[")+chalk.blue("$")+chalk.yellow("]")+chalk.green("######-###-####"));
    
	
   log(chalk.cyan("          -----\n"+
"--------'`'''''''''`---------.     âˆ†\n"+
"|```````|/====={``>./-``Â°Â°Â°Â°Â°=======\n"+
"'...___--.'|||  |----|   \n"+
"'_/      '//''  |----|   \n"+
"         '--    |....|   \n"+
"		|____|"
));

	log(chalk.yellow("[")+chalk.blue("1")+chalk.yellow("]")+chalk.green(" Exit the script to see the code snippet!! "));	
	
    const input = read.createInterface({
    	input:process.stdin,
   	 output:process.stdout
    });
    
  	input.question(chalk.red("~"),(user)=>{
  	
  	if(user.trim() === "1"){
  	   log(chalk.italic(chalk.blue("Thanks for using this trash")));
  
         
         exec("node scraper.js",(err,stdout,stderr)=>{
		err? log("Failed to run scraper.js"): log(stdout);
		//Log fetched data after user quits
	});
    input.close();
    }
  	});
}

setTimeout(catalog,2000);

}else{
	console.log(chalk.red("USE")+chalk.green(" node harvester.mjs <url>"));
	}

