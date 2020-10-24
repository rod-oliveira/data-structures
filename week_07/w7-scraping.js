const fs = require('fs'),
      cheerio = require('cheerio');

for (let count = 1; count <11; count ++) {

    // load  text file into a variable, `content`
    
    var content;
    
    if (count < 10) {
        content = fs.readFileSync('data/m0'+count+'.txt');
    } else {
        content = fs.readFileSync('data/m'+count+'.txt');
    }
    
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
        //.replace(/,.*/g, '')
        .split(',')[0]
        //.split('-')[0]
        .split('Rm')[0]
        .split('Meeting')[0]
        .replace(/Church of the Good Shepard.*/g, '543 Main Street')
        .replace(/189th Street.*/g, '178 Bennett Avenue') // fixing file 10
        .replace(/St..*/g, 'Street')
        .replace(/\(.*/g, '')
        .replace(/\r?\n|\r/g, '')
        .replace(/\r?\t|\r/g, ''));
    });
      
    fs.writeFileSync('data/streets_'+count+'.txt', streetNames.join("\n"));
    //console.log(streetNames);
    
    // Obtaining the group names
    $ = cheerio.load(content);
    let locationNames = []; 
    $('h4').each(function(i, elem) {
        //console.log($('td[style="border-bottom:1px solid #e3e3e3;width:350px;"]').find('b').length);
        locationNames.push( $(elem).text().trim()
        
        .trim()
        );
    });
    
    fs.writeFileSync('data/location_name_'+count+'.txt', locationNames.join("\n"));
    //console.log(locations);
    
    // Obtaining the group names
    $ = cheerio.load(content);
    let locations = []; 
    $('td[style="border-bottom:1px solid #e3e3e3; width:260px"] b').each(function(i, elem) {
        //console.log($('td[style="border-bottom:1px solid #e3e3e3;width:350px;"]').find('b').length);
        locations.push( $(elem).text().trim()
        .split('-')[0]
        .split('@')[0]
        .split('(I')[0].split('(:I')[0].split('( :')[0].split('(i')[0].split('(:i')[0]
        .trim()
        );
    });
    
    fs.writeFileSync('data/group_name_'+count+'.txt', locations.join("\n"));
    //console.log(locations);

    console.log(locations.length);
    console.log(streetNames.length);
}