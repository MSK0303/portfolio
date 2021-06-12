const fs = require('fs');

fs.readdir('./public/mds/', (err, files) => {
  if (err) throw err;
  const convertedFiles = files.map((file) => (
    file.replace(/\.md$/, '')
  ));
  console.log(convertedFiles);

  const j = JSON.stringify(convertedFiles.reverse());
  console.log(j);
  fs.writeFileSync('./src/Components/Blog/data.json', j);
});