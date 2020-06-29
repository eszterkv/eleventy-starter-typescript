"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const navigation_1 = __importDefault(require("../components/navigation"));
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
      <header>
        ${navigation_1.default}
      </header>
      <main>
        ${content}
      </main>
    </body>
  </html>
`;
