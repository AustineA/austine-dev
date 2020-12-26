import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { duotoneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        style={duotoneDark}
        language={language}
        children={value}
        showLineNumbers={true}
      />
    );
  },
};

export default renderers;
