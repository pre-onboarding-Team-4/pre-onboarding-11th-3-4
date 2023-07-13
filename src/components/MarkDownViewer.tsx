import React from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { styled } from 'styled-components';

type MarkdownViewerProps = {
  markdown?: string;
};

const CustomComponent: Components = {
  code: ({ children }) => {
    const content = children.toString();
    if (content.startsWith('```') && content.endsWith('```')) {
      // Triple backticks, render as code block
      const codeContent = content.slice(3, -3);
      return (
        <>
          <br />
          <pre>{codeContent}</pre>
        </>
      );
    } else {
      return (
        <>
          <code>{content}</code>
        </>
      );
    }
  },
};

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ markdown = '' }) => {
  return (
    <Container>
      <ReactMarkdown remarkPlugins={[remarkGfm]} children={markdown} components={CustomComponent} />
    </Container>
  );
};

export default MarkdownViewer;

const Container = styled.div`
  * {
    margin-bottom: 16px;
  }
  h1 {
    padding-bottom: 0.3em;
    border-bottom: 1px solid black;
  }
  a {
    color: blue;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    list-style-type: disc;
    margin-left: 1em;
    padding-left: 1em;
  }

  ul ul {
    list-style-type: circle;
  }

  ul ul ul {
    list-style-type: square;
  }

  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }

  code {
    background-color: lightgray;
  }

  pre code {
    display: block;
    background-color: lightgray;
  }

  blockquote {
    border-left: 4px solid #ddd;
    margin: 0;
    padding: 0.5em 1em;
    color: #777;
    background-color: #f9f9f9;
  }

  hr {
    border: none;
    border-top: 1px solid #ddd;
    margin: 1em 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
