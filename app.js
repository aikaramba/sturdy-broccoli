const port = 3000;
const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log(`Express server is running on port ${port}`)
});
