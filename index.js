const express = require('express');
const cors = require('cors');
const compression = require('compression');
const path = require('path');

const port = process.env.PORT || 3000;

const DIST_FOLDER = './dist';
const INDEX_FILE_NAME = 'index.html';
const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,POST,PATCH,DELETE,OPTIONS'
  );
  next();
});

// added for compression of the response
app.use(compression());

// for serving static files
app.use(express.static(path.join(__dirname, DIST_FOLDER)));

// for getting response after authentication
app.get('/logincomplete', (req, res) => {
  const code = req.query.code;
  console.log({ code });
  res.sendFile(path.join(__dirname, 'logincomplete.html'));
});

// for serving the angular bundle to the browser
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, DIST_FOLDER, INDEX_FILE_NAME));
});

app.listen(port, () => {
  console.log('Server is UP!' + port);
});

module.exports = app;
