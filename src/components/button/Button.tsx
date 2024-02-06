import { getIcons } from "../../assets";
import cx from "classnames";
import React, { useMemo } from "react";

import { baseClass } from "./button.config";
import {
  getButtonSizeClass,
  getIconClassBasedOnVariant,
  getRestButtonConfig,
  VariantMappingToClass,
} from "./button.helper";
import { ButtonProps, ButtonSize, ButtonVariant } from "./button.types";

const Button = ({
  children,
  isFullWidth = false,
  icon,
  variant = ButtonVariant.Primary,
  disabled = false,
  buttonType = "button",
  onClick,
  size = ButtonSize.Medium,
  className,
  iconClass,
}: ButtonProps): JSX.Element => {
  const variantClass = VariantMappingToClass[variant];
  const paddingClass = useMemo(() => getButtonSizeClass(size), [size]);

  const restButtonConfig = useMemo(
    () =>
      getRestButtonConfig({
        isFullWidth,
        icon,
      }),
    [isFullWidth, icon]
  );

  const iconClassName = useMemo(
    () => getIconClassBasedOnVariant(variant, size, disabled, iconClass),
    [variant, disabled, size, iconClass]
  );

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={buttonType}
      className={cx(
        baseClass,
        variantClass,
        restButtonConfig,
        paddingClass,
        className
      )}
    >
      {icon && getIcons(icon, iconClassName)}
      {children}
    </button>
  );
};

Button.Variant = ButtonVariant;

export default Button;
