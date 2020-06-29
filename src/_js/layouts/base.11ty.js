"use strict";
module.exports = ({ title, content }) => `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <link rel="stylesheet" href="/main.bundle.css" />
    </head>
    <body>
      ${content}
    </body>
  </html>
`;
