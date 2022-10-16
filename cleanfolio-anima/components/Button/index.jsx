import React from "react";
import styled from "styled-components";
import { RalewayBoldWhite26px, ValignTextMiddle } from "../../../styledMixins";


function Button(props) {
  const { children, className } = props;

  return (
    <Button1 className={`button ${className || ""}`}>
      <HireMe className="hire-me-1">{children}</HireMe>
    </Button1>
  );
}

const Button1 = styled.div`
  height: 60px;
  margin-left: 1px;
  display: flex;
  padding: 8.6px 52px;
  align-items: flex-start;
  min-width: 215px;
  background-color: var(--seagull);
  border-radius: 16px;
  border: 1px none;

  &.button.button-1 {
    margin-left: 76px;
  }

  &.button.button-2 {
    margin-left: 75px;
  }

  &.button.button-4 {
    margin-left: 76px;
  }

  &.button.button-5 {
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

export default Button;
