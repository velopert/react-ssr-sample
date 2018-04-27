const express = require('express');
const path = require('path');
const routes = require('./routes');
const render = require('./render');

const app = express();

app.use(routes);
app.get('/', render);
app.use(express.static(path.resolve('../react-app/build')));
app.use(render);

app.listen(4000, () => {
  console.log('Server is listening to port 4000!');
});
