import React from 'react';

function Header({own, repo}: {own:string, repo:string}) {
  return (
    <h1>
      {own} / {repo}
    </h1>
    );
}
export default Header;
