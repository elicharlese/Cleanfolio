import React from "react";
import styled from "styled-components";
import { RalewayNormalCapeCod22px, ValignTextMiddle } from "../../../styledMixins";


function Row1(props) {
  const { className } = props;

  return (
    <Row11 className={`row-1 ${className || ""}`}>
      <Httpsgithubcome className="httpsgithubcome-3">
        <span>
          <span className="spanvv6cb raleway-normal-cape-cod-22px">https://github.com/elicharlese/monday-crm</span>
        </span>
      </Httpsgithubcome>
      <BuiltACRMPipeline className="built-a-crm-pipeline">
        <span>
          <span className="span021he raleway-normal-cape-cod-22px">
            Built a CRM pipeline using React and backend Node.js
          </span>
        </span>
      </BuiltACRMPipeline>
    </Row11>
  );
}

const Row11 = styled.div`
  ${RalewayNormalCapeCod22px}
  margin-top: 31px;
  display: flex;
  align-items: flex-start;
  min-width: 1028px;

  &.row-1.row-1-1 {
    margin-left: 2px;
    margin-top: unset;
  }
`;

const Httpsgithubcome = styled.div`
  ${ValignTextMiddle}
  width: 470px;
  height: 31px;
  margin-top: -1px;
  letter-spacing: 0;
`;

const BuiltACRMPipeline = styled.div`
  ${ValignTextMiddle}
  width: 554px;
  height: 31px;
  margin-top: -1px;
  letter-spacing: 0;
`;

export default Row1;
