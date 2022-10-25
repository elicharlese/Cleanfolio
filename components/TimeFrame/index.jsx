import React from "react";
import styled from "styled-components";
import { PoppinsMediumMountainMist13px } from "../../styledMixins";


function TimeFrame() {
  return (
    <TimeFrame1>
      <Jul2022>
        <span className="poppins-medium-mountain-mist-13px">Jul 2022</span>
      </Jul2022>
      <Toggle src="/img/-toggle-1@2x.png" alt="toggle" />
    </TimeFrame1>
  );
}

const TimeFrame1 = styled.div`
  height: 38px;
  margin-left: -1px;
  display: flex;
  padding: 8px;
  align-items: flex-start;
  min-width: 89px;
  gap: 8px;
  border-radius: 2px;
  border: 1px solid;
  border-color: var(--mountain-mist-3);
`;

const Jul2022 = styled.div`
  ${PoppinsMediumMountainMist13px}
  min-height: 20px;
  min-width: 54px;
  letter-spacing: 0;
`;

const Toggle = styled.img`
  width: 9px;
  height: 9px;
  align-self: center;
  margin-bottom: 2px;
`;

export default TimeFrame;
