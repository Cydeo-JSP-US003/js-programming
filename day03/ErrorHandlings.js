console.log("Test Started");

try{
    console.log(result);
}catch(error){
    console.log("An error has occured");
}

console.log("Test Completed");

console.log("--------------------------------");

console.log("Test started");

let browser = "cydeo";

browser = browser.toLowerCase();

if(browser == "chrome" || browser == "safari" || browser == "firefox"){
    console.log("Valid browser");
}else{
    throw new Error(`Invalid browser: ${browser}`);
}


console.log("Test Completed");