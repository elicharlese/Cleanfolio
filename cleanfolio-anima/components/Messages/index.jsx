import React from "react";
import styled from "styled-components";
import { PoppinsRegularNormalWhite12px } from "../../../styledMixins";


function Messages(props) {
  const { envelope, spanText } = props;

  return (
    <Messages1>
      <Frame15>
        <Envelope src={envelope} alt="Envelope" />
        <Messages2>
          <span className="poppins-regular-normal-white-12px">{spanText}</span>
        </Messages2>
      </Frame15>
    </Messages1>
  );
}

const Messages1 = styled.div`
  height: 44px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  min-width: 158px;
  border-radius: 7px;
  border: 1px none;
`;

const Frame15 = styled.div`
  display: flex;
  align-items: center;
  min-width: 101px;
  gap: 16px;
  border: 1px none;
`;

const Envelope = styled.img`
  width: 24px;
  height: 24px;
`;

const Messages2 = styled.div`
  ${PoppinsRegularNormalWhite12px}
  min-height: 18px;
  margin-bottom: 2px;
  min-width: 61px;
  letter-spacing: 0;
`;

export default Messages;
