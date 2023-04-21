const fs = require('fs');
const path = require('path');

function createFiles() {
  const dir = path.join(__dirname, 'docs_preview');
  for (let i = 13; i <= 100; i++) {
    const fileName = path.join(dir, `${i}.md`);
    fs.writeFile(fileName, '', err => {
      if (err) throw err;
      console.log(`${fileName} created.`);
    });
  }
}

createFiles();
