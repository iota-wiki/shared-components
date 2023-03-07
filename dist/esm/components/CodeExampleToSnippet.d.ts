/// <reference types="react" />
export interface CodeSnippetFromFileProps {
    language: string;
    code: string;
    startString: string;
    endString: string;
}
export default function CodeSnippetFromFile({ language, code, startString, endString }: CodeSnippetFromFileProps): JSX.Element;
