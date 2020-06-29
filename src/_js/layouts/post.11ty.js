"use strict";
exports.data = {
    layout: 'base.11ty.js'
};
exports.render = ({ title, page, content }) => `
  <a href="/blog">Back</a>
  <article>
    <h1>${title}</h1>
    <time>${page.date}</time>
    ${content}
  </article>
`;
