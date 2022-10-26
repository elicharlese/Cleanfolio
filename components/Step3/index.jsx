import React from "react";
import styled from "styled-components";
import { RalewayNormalCapeCod26px, ValignTextMiddle } from "../../styledMixins";


function Step3(props) {
  const { codeFork, spanText, className } = props;

  return (
    <Step31 className={`step-3 ${className || ""}`}>
      <CodeFork className="code-fork-1" src={codeFork} alt="Code Fork" />
      <CommitYourCodeForReview className="commit-your-code-for-review">
        <span>
          <span className="spantabj7i raleway-normal-cape-cod-26px">{spanText}</span>
        </span>
      </CommitYourCodeForReview>
    </Step31>
  );
}

const Step31 = styled.div`
  position: absolute;
  width: 247px;
  top: 454px;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 0 0px;
  align-items: center;
  min-height: 245px;
  gap: 10px;

  &.step-3.step-1 {
    top: 0;
    padding: unset;
  }

  &.step-3.step-2 {
    position: unset;
    top: unset;
    left: unset;
    padding: unset;
  }

  &.step-3.step-4 {
    position: unset;
    top: unset;
    left: unset;
  }
`;

const CodeFork = styled.img`
  width: 154px;
  height: 179px;
  margin-right: 3.54px;
`;

const CommitYourCodeForReview = styled.div`
  ${ValignTextMiddle}
  ${RalewayNormalCapeCod26px}
            width: 245px;
  height: 55px;
  margin-right: 2px;
  text-align: center;
  letter-spacing: 0;
`;

export default Step3;
