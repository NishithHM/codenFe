
const express = require('express')
const path = require('path')
const app = express();
// serve up production assets
app.use(express.static('build'));
// let the react app to handle any unknown routes 
// serve up the index.html if express does'nt recognize the route


app.get('/blogs', async(req, res) => {
  const response = await fetch(`https://api.easy-revv.com/api/coden/blog`);
  const data = await response.json();
  console.log(data)
  const htmlCode = data?.htmlCode;
  res.send(htmlCode);
});


app.get('/blogs/:id', async(req, res) => {
  console.log('here')
  const response = await fetch(`https://api.easy-revv.com/api/coden/blog/${req?.params.id}`);
  const data = await response.json();
  const htmlCode = data?.htmlCode;
  res.send(htmlCode);
});


app.get('/sitemap.xml', async (req, res)=>{
  fetch('https://api.easy-revv.com/api/coden/sitemapxml')
  .then(response => response.text())
  .then(async(xml) => {
    const fs = require('fs');
    const xmlFilePath = path.join(__dirname, 'build', 'sitemapdata.xml');
    
    fs.writeFile(xmlFilePath, xml, (err) => {
      if (err) {
        console.error('Error writing XML file:', err);
      } else {
        console.log('XML file created successfully in build folder');
        res.sendFile(path.join(__dirname, 'build', 'sitemapdata.xml'))
      }
    });
  })
  .catch(error => {
    console.error('Error fetching sitemap:', error);
  });
})

app.get('*', (req, res) => {
res.sendFile(path.resolve('./build/index.html'));
});

console.log('server started on port:',3012);
app.listen(3012, async()=>{
    
      
});
