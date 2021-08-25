import styled from 'styled-components';
import {ButtonProps, ButtonThemeVariant} from './types';
import {app} from './theme';
import {appColors} from '../../../assets/colors';

const getDisabledStyles = (disabled: boolean | undefined) => {
    if (disabled) {
        return `
      &:disabled,
      &.button--disabled {
        border: none;
        background-color: ${appColors.soulfulBlue};
        color: ${appColors.white};
        cursor: not-allowed;
      }
    `;
    }
    return '';
};

const getButtonVariantProp = (
    variant: string | undefined,
    property: keyof ButtonThemeVariant,
) => variant && app[variant][property];

const StyledButton = styled.button<ButtonProps>`
    align-items: center;
    background-color: ${({variant}) => getButtonVariantProp(variant, 'background')};
    border: ${({variant}) => getButtonVariantProp(variant, 'border')};
    color: ${({variant}) => getButtonVariantProp(variant, 'color')};
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    justify-content: space-between;
    height: 50px;
    margin: 15px;

    outline: 0;
    transition: background-color 0.2s;
    padding-bottom: 3px;
    opacity: ${({isLoading}) => (isLoading ? 0.5 : 1)};
    border-radius: 4px;

    &:hover:not(:disabled):not(.button--disabled):not(:active) {
        background-color: ${({variant}) => getButtonVariantProp(variant, 'backgroundHover')};
        border-color: ${({variant}) => getButtonVariantProp(variant, 'borderColorHover')};
        color: ${({variant}) => getButtonVariantProp(variant, 'colorHover')};
        border: ${({variant}) => getButtonVariantProp(variant, 'borderHover')};
    }

    ${({disabled}) => disabled && getDisabledStyles(disabled)}
`;

export default StyledButton;
