var fs = require('fs');

//asychronous
fs.readFile('readMe.txt', 'utf8', function (err, data) {
  fs.writeFile('writeMe.txt', data, (err) => {
   if (err) throw err;
   console.log('The file has been saved!');
 });
});
