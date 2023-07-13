/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Avatar from '../components/Avatar';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useIssue } from '../hooks/useIssue';
import remarkGfm from 'remark-gfm';

const IssuePage = () => {
  const { id } = useParams();
  const { issue, fetchIssue } = useIssue();

  useEffect(() => {
    if (!id) return;

    fetchIssue(+id);
  }, [id]);

  if (!issue) return <Loading />;

  return (
    <Root>
      <Header organization={issue.url.split('/')[4]} repo={issue.url.split('/')[5]} />
      <Title>
        {issue.title} <TagNum>#{issue.number}</TagNum>
      </Title>
      <div>
        작성자: <Writer>{issue.user.login}</Writer> ·&nbsp;
        <CreatedAt>
          작성일: {new Date(issue.created_at).getFullYear()}년&nbsp;
          {new Date(issue.created_at).getMonth() + 1}월&nbsp;
          {new Date(issue.created_at).getDate()}일
        </CreatedAt>
        &nbsp; ·&nbsp;
        <Comment>코멘트: {issue.comments}</Comment>
      </div>
      <Content>
        {issue?.user && <Avatar url={issue.user.avatar_url} alt="프로필 이미지" />}
        <div className="markdown">
          <ReactMarkdown
            children={issue.body}
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
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
      </Content>
    </Root>
  );
};

const Root = styled.div`
  & > div:nth-child(3) {
    padding-bottom: 8px;
    border-bottom: 1px solid #d0d7de;
    margin-bottom: 32px;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  color: rgb(31, 35, 40);
  font-weight: 400;
  margin-bottom: 8px;
`;

const TagNum = styled.span`
  color: rgb(101, 109, 118);
`;

const Writer = styled.span`
  color: rgb(101, 109, 118);
  font-weight: 600;
`;

const CreatedAt = styled.span``;

const Comment = styled.span``;

const Content = styled.div`
  display: flex;
  gap: 0 20px;

  & > div:nth-child(2) {
    flex: 1;
  }

  h1,
  h2 {
    border-bottom: 1px solid rgb(216, 222, 228);
    padding-bottom: 0.3em;
    font-size: 1.5em;
  }

  .markdown ul {
    padding-left: 2em;
  }
`;

export default IssuePage;
