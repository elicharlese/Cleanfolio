import React from "react";
import styled from "styled-components";
import { RalewayBoldWhite26px, ValignTextMiddle } from "../../styledMixins";


function Button3(props) {
  const { children, className } = props;

  return (
    <Button className={`button-7 ${className || ""}`}>
      <HireMe className="hire-me-6">
        <span>
          <span className="span572mi raleway-bold-white-26px">{children}</span>
        </span>
      </HireMe>
    </Button>
  );
}

const Button = styled.div`
  height: 60px;
  margin-left: 1px;
  display: flex;
  padding: 8.6px 52px;
  align-items: flex-start;
  min-width: 215px;
  background-color: var(--seagull);
  border-radius: 16px;
  border: 1px none;

  &.button-7.button-9 {
    align-self: center;
    margin-right: 10.15px;
    margin-left: unset;
  }

  &.button-7.button-10 {
    align-self: center;
    margin-right: 10.15px;
    margin-left: unset;
  }

  &.button-7.button-11 {
    align-self: center;
    margin-right: 10.15px;
    margin-left: unset;
  }

  &.button-7.button-12 {
    margin-left: 76px;
  }

  &.button-7.button-13 {
    margin-left: 75px;
  }

  &.button-7.button-14 {
    margin-left: 76px;
  }

  &.button-7.button-15 {
    margin-left: 75px;
  }
`;

const HireMe = styled.div`
  ${ValignTextMiddle}
  ${RalewayBoldWhite26px}
            width: 110px;
  height: 41px;
  text-align: center;
  letter-spacing: 0;
`;

export default Button3;
