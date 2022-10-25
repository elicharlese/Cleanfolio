import React from "react";
import Button3 from "../Button3";
import styled from "styled-components";
import { RalewayNormalCapeCod100px, RalewayBoldCapeCod22px } from "../../styledMixins";


function HeroInfo3(props) {
  const { spanText1, spanText2, spanText3, spanText4, spanText5, spanText6, spanText7, className, buttonProps } = props;

  return (
    <HeroInfo className={`hero-info-1 ${className || ""}`}>
      <OverlapGroup className="overlap-group-10">
        <AnECommerceAndFu className="an-e-commerce-and-fu-1">
          <span className="span0-4 raleway-bold-cape-cod-22px">{spanText1}</span>
          <span className="span1-4 raleway-bold-cape-cod-22px">{spanText2}</span>
          <span className="span2-3 raleway-bold-cape-cod-22px">{spanText3}</span>
          <span className="span3-2 raleway-bold-cape-cod-22px">{spanText4}</span>
          <span className="span4-2 raleway-bold-seagull-22px">{spanText5}</span>
          <span className="span5-1 raleway-bold-cape-cod-22px">{spanText6}</span>
        </AnECommerceAndFu>
        <Name className="name-2">
          <span className="spany67d raleway-normal-cape-cod-100px">{spanText7}</span>
        </Name>
      </OverlapGroup>
      <Button3>{buttonProps.children}</Button3>
    </HeroInfo>
  );
}

const HeroInfo = styled.div`
  position: absolute;
  width: 669px;
  top: 268px;
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
  ${RalewayBoldCapeCod22px}
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

const HeroInfo1 = styled.div`
  .hero-info-1 & {
    top: 200px;
  }
`;

export default HeroInfo3;
