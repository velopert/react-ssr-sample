const manifest = require('../../react-app/build/asset-manifest.json');
const ssr = require('./ssr').default;

const buildHtml = (html, state) => `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="manifest" href="/manifest.json">
    <link rel="shortcut icon" href="/favicon.ico">
    <title>React App</title>
    <link href="/${manifest['main.css']}" rel="stylesheet">
  </head>
  
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">${html}</div>
    <script>
      window.__PRELOADED_STATE__ = ${
  state ? JSON.stringify(state).replace(/</g, '\\u003c') : 'undefined'
};
    </script>
    <script type="text/javascript" src="/${manifest['main.js']}"></script>
  </body>
  
  </html>`;

const render = async (req, res) => {
  if (/^\/static\//.test(req.path)) {
    return;
  }
  try {
    const rendered = await ssr(req);
    // error in request
    if (rendered.error) {
      const html = buildHtml(rendered.html);
      res.send(html);
    }
    const html = buildHtml(rendered.html, rendered.state);
    res.send(html);
  } catch (e) {
    // error in rendering
    res.send(buildHtml());
  }
};

module.exports = render;
