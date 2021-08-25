export const variants = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    ACTION: 'action',
} as const;

export type Variants = typeof variants[keyof typeof variants];

export type ButtonProps = {
    variant?: Variants;
    isLoading?: boolean;
    disabled?: boolean;
    onClickHandler?: () => void;
    customStyle?: object;
};

export type ButtonThemeVariant = {
    background: string;
    backgroundActive: string;
    backgroundHover: string;
    border: string | number;
    borderColorHover: string;
    boxShadow: string;
    boxShadowActive: string;
    color: string;
    colorHover: string;
    borderHover: string | number;
};
