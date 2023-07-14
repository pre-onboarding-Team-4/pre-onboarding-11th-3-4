import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { palette } from '../palette';
import { useParams } from 'react-router-dom';
import { useIssue } from '../hooks/useIssue';
import { formatTime } from '../utils/formatTime';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import LoadSpinner from '../components/LoadSpinner';
import { AxiosError } from 'axios';
import ErrorComp from '../components/Error';

function IssueDetail() {
  const params = useParams();

  const { issue: data, fetchIssue, isLoading } = useIssue();

  useEffect(() => {
    (async () => {
      try {
        window.scrollTo(0, 0);
        await fetchIssue(Number(params?.id));
      } catch (error) {
        if (error instanceof AxiosError) {
          setError(error.response?.data.message ?? 'Sorry, Unknown Error');
        } else {
          setError('Sorry, Unknown error');
        }
      }
    })();
  }, []);

  const [error, setError] = useState('');

  if (error) {
    return <ErrorComp message={error} />;
  }

  if (data?.number !== Number(params.id))
    return <CenterLoadContainer>{isLoading && <LoadSpinner />}</CenterLoadContainer>;

  return (
    <>
      <DetailTopContainer>
        <div>
          <IssueTitle>{data?.title}</IssueTitle>
          <IssueNumber>{`#${data?.number}`}</IssueNumber>
        </div>
        <AvatarBlock>
          <GithubAvatar src={data?.user.avatar_url} alt="githubAvatar" />
          <IssueDescription>{`${data?.user.login} opened this issue on ${formatTime(
            data?.created_at,
          )} · ${data?.comments} comments`}</IssueDescription>
        </AvatarBlock>
      </DetailTopContainer>
      <MarkdownContainer>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter language={match[1]} PreTag="div" {...props} style={oneLight}>
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code {...props}>{children}</code>
              );
            },
            img: (image) => (
              <img
                src={image.src || ''}
                alt={image.alt || ''}
                width={500}
                height={300}
                style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'contain' }}
              />
            ),
          }}
        >
          {String(data?.body.replace(/\n\s\n\s/gi, '\n\n&nbsp;\n\n'))}
        </ReactMarkdown>
      </MarkdownContainer>
    </>
  );
}

const CenterLoadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin-top: -35px;
`;

const DetailTopContainer = styled.div`
  margin-top: 20px;
  border-bottom: 0.5px solid ${palette.grey};
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

const IssueTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
`;

const IssueNumber = styled.span`
  font-size: 18px;
  font-weight: 300;
  color: ${palette.grey};
  margin-left: 5px;
`;

const IssueDescription = styled.span`
  margin-top: 5px;
  color: ${palette.grey};
  font-size: 12px;
  line-height: 1.5;
`;

const AvatarBlock = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const GithubAvatar = styled.img`
  margin-right: 10px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const MarkdownContainer = styled.div`
  margin-top: 30px;
  padding: 30px;
  border: 0.5px solid ${palette.grey};
  border-radius: 4px;
`;

export default IssueDetail;
