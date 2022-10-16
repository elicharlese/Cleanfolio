import React from "react";
import styled from "styled-components";
import { PoppinsRegularNormalMountainMist12p } from "../../../styledMixins";


function Group23(props) {
  const { spanText, className } = props;

  return (
    <Group231 className={`group-23 ${className || ""}`}>
      <Number className="number-2">
        <span className="spankm0zw poppins-regular-normal-mountain-mist-12px">{spanText}</span>
      </Number>
      <Line12 className="line-12" src="/img/line-12-2@2x.png" alt="Line 12" />
    </Group231>
  );
}

const Group231 = styled.div`
  height: 18px;
  display: flex;
  align-items: flex-start;
  min-width: 309px;
  gap: 16px;

  &.group-23.group-24 {
    margin-left: 1px;
  }

  &.group-23.group-25 {
    margin-left: 2px;
  }
`;

const Number = styled.div`
  ${PoppinsRegularNormalMountainMist12p}
  width: 28px;
  min-height: 18px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
`;

const Line12 = styled.img`
  width: 263px;
  height: 1px;
  align-self: center;
  margin-bottom: 2px;
`;

export default Group23;
