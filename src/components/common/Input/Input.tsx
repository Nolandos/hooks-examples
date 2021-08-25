import React from 'react';
import {ErrorText, StyledInput, InputField} from './StyledInput';
import {InputProps} from './types';

const Input: React.FC<InputProps> = ({
    id,
    name,
    type,
    onChangeHandler,
    onFocusHandler,
    onKeyDownHandler,
    onKeyUpHandler,
    value,
    placeholder,
    error,
    ...props
}) => (
    <InputField {...props}>
        <StyledInput
            id={id}
            name={name}
            type={type}
            onChange={(e) => onChangeHandler && onChangeHandler(e.target.value)}
            onKeyDown={onKeyDownHandler}
            onKeyUp={onKeyUpHandler}
            onFocus={onFocusHandler}
            placeholder={placeholder}
            value={value}
        />
        {error && <ErrorText>{error}</ErrorText>}
    </InputField>
);

export default Input;
