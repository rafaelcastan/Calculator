import styled from 'styled-components';

export const Switch = styled.div`
  position: relative;
  height: 25px;
  width:100%;
  min-width:50px;
  background-color: ${props=> props.theme.backgroundColors.toggleAndKeypad};
  border-radius: 25px;
`;


export const SwitchSelection = styled.span`
  display: block;
  position: absolute;
  z-index: 1;
  left: 0px;
  margin-top: 3.5px;
  margin-left: 4px;
  width: 16px;
  height: 16px;
  background: ${props=> props.theme.backgroundColors.equalButtonAndToggle};
  border-radius: 100%;
  transition: left 0.25s ease-out;
`;

export const SwitchLabel = styled.label`
  position: relative;
  z-index: 2;
  float: left;
  height: 25px;
  width: 23px;
  line-height: 26px;
  cursor: pointer;
`;