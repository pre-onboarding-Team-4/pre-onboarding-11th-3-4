import React, { ReactNode, useEffect, useRef } from 'react';
import { styled } from 'styled-components';

interface InfineteScrollProps {
  children: ReactNode;
}

function InfiniteScroll({ children }: InfineteScrollProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      const observer = new IntersectionObserver(handleIntersection, { threshold: 1 });
      observer.observe(bottomRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log('bottom');
      }
    });
  };

  return (
    <Container>
      {children}
      {/*To Do: 무한 스크롤*/}
      <div ref={bottomRef} />
    </Container>
  );
}

export default InfiniteScroll;

const Container = styled.div``;
