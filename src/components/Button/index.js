import React from "react";
import PropTypes from "prop-types";

import * as S from "./styles";

export default function Button({
  width,
  height,
  backGroundColor,
  boxShadow,
  borderRadius,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  paddingLeft,
  paddingRight,
  fSize,
  fWeight,
  lHeight,
  color,
  onClick,
  children,
  ...rest
}) {
  return (
    <S.Container
      width={width}
      height={height}
      onClick={onClick}
      backGroundColor={backGroundColor}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      paddingRight={paddingRight}
      paddingLeft={paddingLeft}
      color={color}
    >
      <S.ContainerTextButton>
        <S.TextButton
          color={color}
          fSize={fSize}
          fWeight={fWeight}
          lHeight={lHeight}
          {...rest}
        >
          {children}
        </S.TextButton>
      </S.ContainerTextButton>
    </S.Container>
  );
}

Button.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  backGroundColor: PropTypes.string,
  boxShadow: PropTypes.string,
  borderRadius: PropTypes.string,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string,
  fSize: PropTypes.string,
  fWeight: PropTypes.string,
  lHeight: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  width: "150px",
  height: "50px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "30px",
  marginTop: "15px",
  marginBottom: "0px",
  marginLeft: "0px",
  marginRight: "0px",
  paddingLeft: "0px",
  paddingRight: "0px",
  fSize: "18px",
  fWeight: "500",
  lHeight: "22px",
  onPress: () => {},
  children: "",
};
