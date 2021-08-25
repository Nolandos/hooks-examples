import styled from 'styled-components';
import {appColors} from '../../../assets/colors';

export const StyledInput = styled.input`
    border: 1px solid ${appColors.black};
    outline: none;
    padding: 10px 15px;
    width: calc(100% - 30px);
`;

export const ErrorText = styled.p`
    margin: 5px 0 0 0;
    padding: 0;
    color: ${appColors.grubbyRed};
`;

export const InputField = styled.div`
    margin: 15px 0;
    max-width: 400px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
