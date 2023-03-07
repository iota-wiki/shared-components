import React from "react";
import CodeBlock from "@docusaurus/theme-classic/lib/theme/CodeBlock";
export default function CodeSnippetFromFile(_a) {
    var language = _a.language, code = _a.code, startString = _a.startString, endString = _a.endString;
    var snippet = code;
    var indexStart = code.indexOf(startString);
    snippet = snippet.substring(indexStart);
    var indexEnd = snippet.indexOf(endString);
    snippet = snippet.substring(0, indexEnd);
    return React.createElement(CodeBlock, { className: "language-" + language }, snippet);
}
//# sourceMappingURL=CodeExampleToSnippet.js.map