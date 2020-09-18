const fs = require('fs'),
      cheerio = require('cheerio');

// load m09 text file into a variable, `content`
let content = fs.readFileSync('data/m09.txt');

// parse `content` into a cheerio object
let $ = cheerio.load(content);

// print (to the console) all street names
// section purely for debugging purposes
$('td[style="border-bottom:1px solid #e3e3e3; width:260px"]').each(function(i, elem) {
    $(elem).find('*').remove().html().trim();
    //console.log($(elem).html());          // For debugging purposes
});

// td[style="border-bottom:1px solid #e3e3e3; width:260px"] is the exact element containing all street names I'm looking for
// Regular expressions used globally to replace unwanted text for '':
// "/,.*/g" -  Replaces all characters after the comma ','
// "/\(.*/g" - Replaces all characters after the parenthesis '(' to remove text such as (@ Madison Avenue) 10035
// "/\r?\n|\r/g" - Replaces all newlines "\n" to clean extra line breaks: '35 East 125 Street\n'
// "/\r?\t|\r/g" - Replaces all extra tabs "\t" to clean this: '35 East 125 Street\t\t\t\t\t\t'

let streetNames = []; 
$('td[style="border-bottom:1px solid #e3e3e3; width:260px"]').each(function(i, elem) {
    streetNames.push( $(elem).text().trim()
    .replace(/,.*/g, '')
    .replace(/\(.*/g, '')
    .replace(/\r?\n|\r/g, '')
    .replace(/\r?\t|\r/g, ''));
});
  
fs.writeFileSync('data/m09_week_02.txt', streetNames.join("\n"));
console.log(streetNames);
