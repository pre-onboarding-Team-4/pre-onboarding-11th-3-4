import React from 'react';

interface HeaderProps {
  url: string;
}

export default function Header({ url }: HeaderProps) {
  const getOwnRepo = (url: string) => {
    const regex = /repos\/([^/]+\/[^/]+)/;
    const match = url.match(regex);

    if (match && match[1]) {
      const extractedString = match[1];
      console.log(extractedString); // 결과: "facebook/react"
      return extractedString;
    } else {
      console.log('문자열을 추출할 수 없습니다.');
    }
  };

  return (
    <header>
      <h1>{getOwnRepo(url)}</h1>
    </header>
  );
}
