import React from 'react';
import {ButtonProps, variants} from './types';
import StyledButton from './StyledButton';

const Button: React.FC<ButtonProps> = ({
    variant,
    children,
    isLoading,
    disabled,
    onClickHandler,
    customStyle,
    ...props
}) => (
    <StyledButton
        variant={variant}
        disabled={disabled}
        isLoading={isLoading}
        onClick={onClickHandler}
        style={customStyle}
        {...props}
    >
        {children}
    </StyledButton>
);

Button.defaultProps = {
    variant: variants.PRIMARY,
    isLoading: false,
    disabled: false,
};

export default Button;
