import React from "react";
import styled from "styled-components";
import { RalewayNormalCapeCod54px, RalewayNormalCapeCod66px, ValignTextMiddle } from "../../styledMixins";


function Tools(props) {
  const { className } = props;

  return (
    <Tools1 className={`tools ${className || ""}`}>
      <ExpandForMoreInformation className="expand-for-more-information">
        <span>
          <span className="spanphnax raleway-normal-cape-cod-66px">Expand for more information...</span>
        </span>
      </ExpandForMoreInformation>
      <Menus className="menus">
        <OverlapGroup3 className="overlap-group3-4">
          <Gitbook className="gitbook">
            <span>
              <span className="spanptehqj raleway-normal-cape-cod-54px">Gitbook</span>
            </span>
          </Gitbook>
        </OverlapGroup3>
        <OverlapGroup2 className="overlap-group2-8">
          <Packages className="packages">
            <span>
              <span className="spang8tjnj raleway-normal-cape-cod-54px">Packages</span>
            </span>
          </Packages>
        </OverlapGroup2>
        <OverlapGroup1 className="overlap-group1-11">
          <Packages className="readmemd">
            <span>
              <span className="spanlvesal raleway-normal-cape-cod-54px">README.md</span>
            </span>
          </Packages>
        </OverlapGroup1>
        <OverlapGroup className="overlap-group-22">
          <Packages className="fa-qs">
            <span>
              <span className="spanizaqt raleway-normal-cape-cod-54px">FAQs</span>
            </span>
          </Packages>
        </OverlapGroup>
      </Menus>
    </Tools1>
  );
}

const Tools1 = styled.div`
  width: 1512px;
  height: 982px;
  display: flex;
  flex-direction: column;
  padding: 61px 68px;
  align-items: flex-end;
  gap: 77px;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const ExpandForMoreInformation = styled.div`
  ${ValignTextMiddle}
  ${RalewayNormalCapeCod66px}
            width: 1042px;
  height: 109px;
  align-self: center;
  margin-left: 4px;
  text-align: center;
  letter-spacing: 0;
`;

const Menus = styled.div`
  width: 1373px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 672px;
  gap: 68px;
  border-radius: 16px;
`;

const OverlapGroup3 = styled.div`
  height: 117px;
  margin-left: 2px;
  display: flex;
  padding: 1px 469px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 1369px;
  background-color: var(--purple-heart-3);
  border-radius: 16px;
`;

const Gitbook = styled.div`
  ${ValignTextMiddle}
  ${RalewayNormalCapeCod54px}
            width: 426px;
  height: 106px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup2 = styled.div`
  height: 117px;
  margin-left: 2px;
  display: flex;
  padding: 0.9px 424px;
  align-items: flex-end;
  min-width: 1369px;
  background-color: var(--purple-heart-3);
  border-radius: 16px;
`;

const Packages = styled.div`
  ${ValignTextMiddle}
  ${RalewayNormalCapeCod54px}
            width: 521px;
  height: 106px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  height: 117px;
  display: flex;
  padding: 0.9px 424px;
  align-items: flex-end;
  min-width: 1369px;
  background-color: var(--purple-heart-3);
  border-radius: 16px;
`;

const OverlapGroup = styled.div`
  height: 117px;
  margin-left: 4px;
  display: flex;
  padding: 0.9px 424px;
  align-items: flex-end;
  min-width: 1369px;
  background-color: var(--purple-heart-3);
  border-radius: 16px;
`;

const OverlapGroup31 = styled.div`
  .tools.tools-1 & {
    background-color: var(--orchid-2);
  }
`;

const OverlapGroup32 = styled.div`
  .tools.tools-2 & {
    background-color: var(--portage-2);
  }
`;

const OverlapGroup33 = styled.div`
  .tools.tools-3 & {
    background-color: var(--fern-2);
  }
`;

const OverlapGroup34 = styled.div`
  .tools.tools-4 & {
    background-color: var(--cararra-2);
  }
`;

const OverlapGroup35 = styled.div`
  .tools.tools-5 & {
    background-color: var(--dairy-cream-2);
  }
`;

const OverlapGroup36 = styled.div`
  .tools.tools-6 & {
    background-color: var(--anzac-2);
  }
`;

const OverlapGroup37 = styled.div`
  .tools.tools-7 & {
    background-color: var(--mandy-2);
  }
`;

const OverlapGroup38 = styled.div`
  .tools.tools-8 & {
    background-color: var(--mexican-red-2);
  }
`;

const OverlapGroup39 = styled.div`
  .tools.tools-9 & {
    background-color: var(--yellow-sunshine-2);
  }
`;

const OverlapGroup310 = styled.div`
  .tools.tools-10 & {
    background-color: var(--turquoise-blue-2);
  }
`;

const OverlapGroup311 = styled.div`
  .tools.tools-11 & {
    background-color: var(--seagull-2);
  }
`;

export default Tools;
