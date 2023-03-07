import React from "react";
import CodeBlock from "@docusaurus/theme-classic/lib/theme/CodeBlock";
export interface CodeSnippetFromFileProps {
  language: string;
  code: string;
  startString: string;
  endString: string;
}
export default function CodeSnippetFromFile({
  language,
  code,
  startString,
  endString,
}: CodeSnippetFromFileProps) {
  let snippet = code;
  const indexStart = code.indexOf(startString);
  snippet = snippet.substring(indexStart);
  const indexEnd = snippet.indexOf(endString);
  snippet = snippet.substring(0, indexEnd);
  return <CodeBlock className={"language-" + language}>{snippet}</CodeBlock>;
}
