const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('./'));
app.use(express.static('dist'));

app.get(`${__dirname}`, (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(port, () => {
  console.info('app listening on', port);
});
