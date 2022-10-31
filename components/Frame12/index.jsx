import React from "react";
import styled from "styled-components";
import { PoppinsRegularNormalWhite12px } from "../../styledMixins";


function Frame12(props) {
  const { group2, spanText } = props;

  return (
    <Frame121>
      <Group2 src={group2} alt="Group 2" />
      <Place>
        <span className="poppins-regular-normal-white-12px">{spanText}</span>
      </Place>
    </Frame121>
  );
}

const Frame121 = styled.div`
  display: flex;
  align-items: center;
  min-width: 76px;
  gap: 16px;
  border: 1px none;
`;

const Group2 = styled.img`
  width: 24px;
  height: 24px;
`;

const Place = styled.div`
  ${PoppinsRegularNormalWhite12px}
  min-height: 18px;
  margin-bottom: 2px;
  min-width: 36px;
  letter-spacing: 0;
`;

export default Frame12;
