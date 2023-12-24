const express = require('express');
const fs = require('fs');
const path = require('path');
const React = require('react');

const ReactDOMServer = require('react-dom/server');
const { Helmet } = require('react-helmet');

const { StaticRouter } = require('react-router-dom/server');

const App = require('./App').default;

require("./i18n_server.js");

const PORT = 8000;
const app = express();

app.use('^/$', (req, res) => {
  fs.readFile(path.resolve('./public/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Ein Fehler ist aufgetreten");
    }

    const context = {};

    const appString = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );

    const helmetData = Helmet.renderStatic();

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${appString}</div>`
      ).replace(
        '<head>',
        `<head>${helmetData.title.toString()}${helmetData.meta.toString()}`
      ).replace(
        '</body>', 
        `<script src="/bundle.js"></script></body>`
      )
    );
  });
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});
