const express = require('express');
const config = require('./config.json');

const app = express();

// Add body-parser
app.use(require('body-parser').json());

// Add Rules API
require('./rules-api')(app);

app.listen(config.port, 'localhost', (err) => {
  if (err) {
    console.error(err);
  }

  console.info(`Rest Server listening on : http://localhost:${config.port}`);
});
