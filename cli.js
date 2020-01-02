#! /usr/bin/env node

var fs = require('fs');

const [,, ... args] = process.argv

const dir = `${args}`
const cssDir = `${args}/css`
//const jsDir = `${args}/js`


try {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir)
    fs.mkdirSync(cssDir)
    //fs.mkdirSync(jsDir)
  }
} catch (err) {
  console.error(err)
}

// Create the config json
var stream = fs.createWriteStream(`${args}/${args}.config.json`);

stream.once('open', (fd) => {
    stream.write('{\n');
    stream.write('    "status": "wip",\n');
    stream.write('    "hidden": false,\n');
    stream.write('    "context": {\n');
    stream.write('      "modifier": ""\n');
    stream.write('    }\n');
    stream.write('}\n');
    stream.end();
});

// create a blank handlebars temnplate
fs.writeFile(`${args}/${args}.hbs`,'', function (err) {
  if (err) throw err;
});  


// create a blank less file
fs.writeFile(`${args}/css/${args}.less`,'', function (err) {
  if (err) throw err;
}); 

console.log(`${args} created successfully`)