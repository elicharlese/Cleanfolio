import React from "react";
import styled from "styled-components";


function Bots(props) {
  const { overlapGroup3, bot } = props;

  return (
    <Bots1>
      <OverlapGroup3 style={{ backgroundImage: `url(${overlapGroup3})` }}>
        <Bot src={bot} alt="Bot" />
      </OverlapGroup3>
    </Bots1>
  );
}

const Bots1 = styled.div`
  width: 1512px;
  height: 1048px;
  display: flex;
  padding: 131px 156px;
  align-items: flex-start;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const OverlapGroup3 = styled.div`
  height: 720px;
  display: flex;
  padding: 0 552px;
  align-items: center;
  min-width: 1200px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Bot = styled.img`
  width: 96px;
  height: 96px;
`;

const TdtoLive = styled.div`
  width: 1512px;
  height: 1048px;
  display: flex;
  padding: 131px 156px;
  align-items: flex-start;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const OverlapGroup31 = styled.div`
  height: 720px;
  display: flex;
  padding: 0 552px;
  align-items: center;
  min-width: 1200px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Twitch = styled.img`
  width: 96px;
  height: 96px;
`;

export default Bots;
