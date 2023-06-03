const fs = require('fs');
const folderName = process.argv[2] || 'Project'

// fs.mkdir('Dog', { recursive: true }, (err) => {
//   console.log('In the callback')
//   if (err) throw err;
// });

fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`)
fs.writeFileSync(`${folderName}/app.js`)
fs.writeFileSync(`${folderName}/style.css`)