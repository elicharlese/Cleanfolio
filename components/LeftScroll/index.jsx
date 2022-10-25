import React from "react";
import styled from "styled-components";


function LeftScroll(props) {
  const { src, className } = props;

  return (
    <LeftScroll1 className={`left-scroll ${className || ""}`}>
      <ChevronLeft className="chevron-left" src={src} alt="Chevron Left" />
    </LeftScroll1>
  );
}

const LeftScroll1 = styled.div`
  height: 60px;
  display: flex;
  padding: 12px 11px;
  align-items: flex-start;
  min-width: 60px;
  background-color: var(--seagull);
  border-radius: 30px;

  &.left-scroll.right-scroll {
    margin-left: 67px;
  }
`;

const ChevronLeft = styled.img`
  width: 38px;
  height: 35px;
`;

export default LeftScroll;
