export type InputProps = {
    placeholder?: string;
    id?: string;
    name?: string;
    type?: string;
    onChangeHandler?: (val: string) => void;
    onFocusHandler?: () => void;
    onKeyDownHandler?: (e: any) => void;
    onKeyUpHandler?: (e: any) => void;
    value?: string;
    error?: string;
};
