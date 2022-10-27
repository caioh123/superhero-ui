import styled from "styled-components";

export const Container = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius || "30px"};
  justify-content: center;
  background-color: ${({ backGroundColor }) => backGroundColor};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  padding-right: ${({ paddingRight }) => paddingRight};
  padding-left: ${({ paddingLeft }) => paddingLeft};
`;

export const ContainerTextButton = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.p`
  font-size: ${({ fSize }) => fSize};
  font-family: ${({ fFamily }) => fFamily};
  font-weight: ${({ fWeight }) => fWeight};
  line-height: ${({ lHeight }) => lHeight};
  color: ${({ color }) => color};
  text-align: center;
`;
