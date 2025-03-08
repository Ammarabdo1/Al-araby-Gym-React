import React from "react";
import { ButtonContainer } from "styles/designs/Button";

const Btn = ({
  loading = false,
  disabled = false,
  children,
  hoverDirection,
  shadow,
  className,
  onClick,
  startIcon,
  endIcon,
  type,
}) => {
  return (
    <ButtonContainer
      disabled={disabled}
      type={type}
      startIcon={startIcon}
      endIcon={endIcon}
      className={className}
      shadow={shadow}
      dir={hoverDirection}
      onClick={(e) => {
        onClick && onClick(e);
      }}
    >
      {children}
    </ButtonContainer>
  );
};

export default Btn;
