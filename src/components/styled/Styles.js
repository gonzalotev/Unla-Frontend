import styled from 'styled-components';

export const colors ={
    primary: "#fff",
    theme: "#BE185D",
    light1: "#F3F4F6",
    light2: "#E5E7EB",
    dark1: "#1F2937",
    dark2: "#4B5563",
    dark3: "#9CA3AF",
    red: "#DC2626"
}

export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)));
    background-size: cover;
    background-attachment: fixed;
`;

export const StyledTittle = styled.h2`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.primary};
    padding: 5px;
    margin-bottom: 20px;
`;

export const StyledSubTittle = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.primary};
    padding: 5px;
    margin-bottom: 25px;
`;


//input

export const StyledTextInput = styled.input`
    width: 280px;
    padding: 15px;
    padding-left: 50px;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${colors.dark3};
    background-color: ${colors.light2};
    border: 0;
    outline: 0;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;

    ${(props) => props.invalid && 
        `background-color: ${colors.red}; 
        color: ${colors.dark3};`}

    &:focus{
        backgound-color: ${colors.dark2};
        color: ${colors.dark1};
    }
`;

export const StyledLabel = styled.p`
    text-align: left;
    font-size: 13px;
    font-weight: bold;
`;

export const StyledFormArea = styled.div`
    heigth: 500px;
    width: 350px;
    background-color: ${props => props.bg || colors.light1};
    text-align: center;
    padding: 45px 55px;
    padding-left: 500px;
    margin-top: 100px
`;

export const StyledFormButton = styled.button`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 2px solid ${colors.theme};
    border-radius: 25px;
    color: ${colors.theme};
    transition: ease-in-out 0.3s;

    &: hover{
        background-color: ${colors.theme};
        color: ${colors.primary};
        cursor: pointer; 
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 25px;
`;

export const ErrorMsg = styled.div`
    font-size: 15px;
    color: ${colors.red};
    margin-top: -5px;
    margin-bottom: 10px;
    text-align: center;
`;

export const ExtraText = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => (props.color? props.color : colors.dark2)};
    padding: 2px;
    margin-top: 10px;
`;



//icons

export const StyledIcon = styled.p`
    color: ${colors.dark1};
    position: absolute;
    font-size: 21px;
    top: 35px;
    ${(props) => props.right && `rigth. 15px; `}
    ${(props) => !props.right && `left: 15px; `};
`;

export const CopyrightText = styled.p`
    padding: 5px;
    margin:20px;
    text-align: center;
    color: ${colors.dark1};
`;