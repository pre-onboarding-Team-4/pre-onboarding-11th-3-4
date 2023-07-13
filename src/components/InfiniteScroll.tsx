import React, { ReactNode, useEffect, useRef } from 'react';
import { useIssues } from '../hooks/useIssues';

interface InfineteScrollProps {
  children: ReactNode;
}

function InfiniteScroll({ children }: InfineteScrollProps) {
  const { fetchMoreIssues, isLoading } = useIssues();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      const observer = new IntersectionObserver(handleIntersection, { threshold: 0.8 });
      observer.observe(bottomRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (!isLoading && entry.isIntersecting) {
        fetchMoreIssues();
      }
    });
  };

  return (
    <div>
      {children}
      {/*To Do: 무한 스크롤*/}
      <div id="bottom" ref={bottomRef} />
    </div>
  );
}

export default InfiniteScroll;
