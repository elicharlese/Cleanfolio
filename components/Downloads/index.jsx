import React from "react";
import styled from "styled-components";


function Downloads(props) {
  const { className } = props;

  return (
    <Downloads1 className={`downloads-1 ${className || ""}`}>
      <MacClient className="mac-client" src="/img/mac-client-9@2x.png" alt="Mac Client" />
      <MacClient className="windows-client" src="/img/windows-client-9@2x.png" alt="Windows Client" />
      <MacClient className="app-symbol" src="/img/app-symbol-9@2x.png" alt="App Symbol" />
      <MacClient className="playstore" src="/img/playstore-9@2x.png" alt="Playstore" />
      <MacClient className="apple-watch" src="/img/apple-watch-9@2x.png" alt="Apple Watch" />
      <MacClient className="command-line" src="/img/command-line-9@2x.png" alt="Command Line" />
    </Downloads1>
  );
}

const Downloads1 = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: flex-start;
  min-width: 1390px;
  gap: 43px;
  border: 1px none;

  &.downloads-1.downloads-3 {
    align-items: center;
  }

  &.downloads-1.downloads-4 {
    align-items: center;
  }

  &.downloads-1.downloads-5 {
    align-items: center;
  }
`;

const MacClient = styled.img`
  width: 195px;
  height: 99px;
  margin-top: 0;
`;

const MacClient1 = styled.img`
  .downloads-1.downloads-3 & {
    margin-top: unset;
  }
`;

const MacClient2 = styled.img`
  .downloads-1.downloads-4 & {
    margin-top: unset;
  }
`;

const MacClient3 = styled.img`
  .downloads-1.downloads-5 & {
    margin-top: unset;
  }
`;

export default Downloads;
