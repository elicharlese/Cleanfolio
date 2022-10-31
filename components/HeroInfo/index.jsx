import React from "react";
import Button from "../Button";
import styled from "styled-components";
import { RalewayNormalCapeCod100px, RalewayBoldWhite22px2 } from "../../styledMixins";


function HeroInfo(props) {
  const { spanText1, spanText2, spanText3, name, buttonProps } = props;

  return (
    <HeroInfo1>
      <OverlapGroup>
        <AnECommerceAndFu>
          <span className="raleway-bold-cape-cod-22px">{spanText1}</span>
          <span className="raleway-bold-seagull-22px">{spanText2}</span>
          <span className="raleway-bold-cape-cod-22px">{spanText3}</span>
        </AnECommerceAndFu>
        <Name>{name}</Name>
      </OverlapGroup>
      <Button>{buttonProps.children}</Button>
    </HeroInfo1>
  );
}

const HeroInfo1 = styled.div`
  position: absolute;
  width: 669px;
  top: 225px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 355px;
  gap: 67px;
  border: 1px none;
`;

const OverlapGroup = styled.div`
  width: 669px;
  height: 229px;
  position: relative;
  margin-top: -1px;
`;

const AnECommerceAndFu = styled.div`
  ${RalewayBoldWhite22px2}
  position: absolute;
  width: 668px;
  top: 134px;
  left: 1px;
  letter-spacing: 0;
`;

const Name = styled.div`
  ${RalewayNormalCapeCod100px}
  position: absolute;
  width: 669px;
  top: 0;
  left: 0;
  letter-spacing: 0;
`;

const HeroInfo2 = styled.div`
  position: absolute;
  width: 669px;
  top: 225px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 355px;
  gap: 67px;
  border: 1px none;
`;

const OverlapGroup1 = styled.div`
  width: 669px;
  height: 229px;
  position: relative;
  margin-top: -1px;
`;

const AnECommerceAndFu1 = styled.div`
  ${RalewayBoldWhite22px2}
  position: absolute;
  width: 668px;
  top: 134px;
  left: 1px;
  letter-spacing: 0;
`;

const Name1 = styled.div`
  ${RalewayNormalCapeCod100px}
  position: absolute;
  width: 669px;
  top: 0;
  left: 0;
  letter-spacing: 0;
`;

export default HeroInfo;
