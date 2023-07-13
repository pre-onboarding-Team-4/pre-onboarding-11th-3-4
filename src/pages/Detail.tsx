import React from 'react';
import { useIssue } from '../hooks/useIssue';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import MarkdownViewer from '../components/MarkDownViewer';

function Detail() {
  const { issue, fetchIssue, isLoading } = useIssue();
  const { id } = useParams();

  React.useEffect(() => {
    if (id) {
      const parsedId = parseInt(id);
      fetchIssue(parsedId);
    }
  }, []);

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Title>
        <bdi>{issue?.title}</bdi>
        <span>#{issue?.number}</span>
      </Title>
      <br />
      <>
        <MarkdownViewer markdown={issue?.body} />
      </>
    </>
  );
}

export default Detail;

const Title = styled.h1`
  span {
    color: gray;
    font-size: 0.7em;
    margin-left: 5px;
  }
`;
