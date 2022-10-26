import React from "react";
import styled from "styled-components";
import { RalewayBoldMexicanRed32px } from "../../styledMixins";


function Button2(props) {
  const { children } = props;

  return (
    <Button21>
      <DASHBOARD>
        <span className="raleway-bold-mexican-red-32px">{children}</span>
      </DASHBOARD>
    </Button21>
  );
}

const Button21 = styled.div`
  height: 68px;
  display: flex;
  padding: 14px 26px;
  align-items: flex-start;
  min-width: 257px;
  background-color: var(--material-themereferrorerror100);
  border-radius: 16px;
  border: 1px none;
  box-shadow: 0px 4px 4px #00000040;
`;

const DASHBOARD = styled.div`
  ${RalewayBoldMexicanRed32px}
  min-height: 38px;
  letter-spacing: 0;
`;

export default Button2;
