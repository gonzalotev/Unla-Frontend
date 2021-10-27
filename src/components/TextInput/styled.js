import styled, { css } from 'styled-components';
import { colors } from 'constant';

const textError = css`
  background-color: ${colors.blue}; 
  color: ${colors.dark3}
`;

export const StyledTextInput = styled.input`
    width: 280px;
    padding: 15px 40px;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${colors.dark3};
    background-color: ${colors.light2};
    border: 0;
    outline: 0;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;
    ${({ invalid }) => invalid && textError};
    &:focus{
        background-color: ${colors.input1};
        color: ${colors.dark1};
    }
`;

export const StyledLabel = styled.p`
    text-align: left;
    font-size: 13px;
    font-weight: bold;
`;

export const StyledIcon = styled.div`
    color: ${colors.dark1};
    position: absolute;
    font-size: 21px;
    top: 40px;
    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'initial')};
    ${({ right }) => (right ? 'right: 15px;' : 'left: 15px;')}
`;

export const ErrorMsg = styled.div`
    font-size: 15px;
    color: ${colors.blue};
    margin-top: -5px;
    margin-bottom: 10px;
    text-align: center;
`;
