import React from 'react';
import CodeBlock from '@docusaurus/theme-classic/lib/theme/CodeBlock';
export default function CodeSnippetFromFile(_a) {
    var language = _a.language, code = _a.code, startString = _a.startString, endString = _a.endString;
    //assign code as the snippet
    var snippet = code;
    //retrieve the index of the start string
    var indexStart = code.indexOf(startString);
    //trim the snippet to exclude everything after the start index
    snippet = snippet.substring(indexStart);
    //retrieve the index of the first occurrence of the end string after the start sting
    var indexEnd = snippet.indexOf(endString);
    //trim the snippet to exclude everything after the end string
    snippet = snippet.substring(0, indexEnd);
    //return a code block of the desired language
    return (React.createElement(CodeBlock, { className: 'language-' + language }, snippet));
}
//# sourceMappingURL=CodeExampleToSnippet.js.map