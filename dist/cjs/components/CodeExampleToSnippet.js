"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var CodeBlock_1 = tslib_1.__importDefault(require("@docusaurus/theme-classic/lib/theme/CodeBlock"));
function CodeSnippetFromFile(_a) {
    var language = _a.language, code = _a.code, startString = _a.startString, endString = _a.endString;
    var snippet = code;
    var indexStart = code.indexOf(startString);
    snippet = snippet.substring(indexStart);
    var indexEnd = snippet.indexOf(endString);
    snippet = snippet.substring(0, indexEnd);
    return react_1["default"].createElement(CodeBlock_1["default"], { className: "language-" + language }, snippet);
}
exports["default"] = CodeSnippetFromFile;
//# sourceMappingURL=CodeExampleToSnippet.js.map