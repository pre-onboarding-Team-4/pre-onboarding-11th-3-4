import React, { useEffect } from 'react';
import { useIssue } from '../hooks/useIssue';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

export default function Detail() {
  const { issue, fetchIssue, isLoading } = useIssue();
  const { id } = useParams();

  useEffect(() => {
    fetchIssue(Number(id));
  }, []);
  return (
    <section>
      {isLoading && <p>Loading</p>}
      {issue && (
        <>
          <Header url={issue.url} />
          <h2>{issue.title}</h2>
          <span>{issue.number}</span>
          <span>{issue.user.login}</span>
          <span>{issue.created_at}</span>
          <span>{issue.comments}</span>
          <img src={issue.user.avatar_url} alt="" />
          <div className="markdown">
            <ReactMarkdown
              children={issue.body}
              remarkPlugins={[remarkGfm]}
              components={{
                code({ inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      {...props}
                      children={String(children).replace(/\n$/, '')}
                      style={prism}
                      language={match[1]}
                      PreTag="div"
                    />
                  ) : (
                    <code {...props} className={className}>
                      {children}
                    </code>
                  );
                },
              }}
            />
          </div>
        </>
      )}
    </section>
  );
}
