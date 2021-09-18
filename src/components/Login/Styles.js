import styled from 'styled-components';

export const colors ={
    primary: "#fff",
    theme: "rgba(62,94,199,1)",
    light1: "#F3F4F6",
    light2: "#E5E7EB",
    dark1: "#000000",
    dark2: "#0E1947",
    dark3: "#000000",
    blue: "#8DA2F8"
}

export const StyledContainer = styled.div`
    padding: 150px;
    margin-top:-100px;
    height:680px;
    background: rgb(62,94,199);
    background: linear-gradient(153deg, rgba(62,94,199,1) 0%, rgba(168,165,214,1) 0%, rgba(94,137,255,1) 0%, rgba(213,221,249,1) 96%, rgba(255,255,255,1) 100%);
`;

export const StyledTittle = styled.h2`
    font-family: fantasy;
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.primary};
    padding: 5px;
    margin-bottom: 20px;
    margin-left:-400px;
`;

export const StyledSubTittle = styled.p`
    font-family: fantasy;
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
    font-family: fantasy;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${colors.dark3};
    background-color: ${colors.light2};
    border: 0;
    outline: 0;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;
    margin-left: -350px;

    ${(props) => props.invalid && 
        `background-color: ${colors.blue}; 
        color: ${colors.dark3};`}

    &:focus{
        backgound-color: ${colors.dark2};
        color: ${colors.dark1};
    }
`;

export const StyledLabel = styled.p`
    text-align: left;
    font-size: 20px;
    font-weight: bold;
    margin-left: -350px;
`;

export const StyledFormArea = styled.div`
   
    width: 100px;
    background-color: ${props => props.bg || colors.light1};
    margin-left:450px;
    padding: 70px;
    padding-left: 500px;
    margin-top: 100px
`;

export const StyledFormButton = styled.button`
    font-family: fantasy;
    padding: 10px;
    width: 200px;
    background-color: transparent;
    font-size: 20px;
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
    margin-left: -450px;
`;

export const ErrorMsg = styled.div`
    font-size: 20px;
    color: ${colors.blue};
    margin-top: -5px;
    margin-bottom: 10px;
    text-align: center;
    margin-left: -450px;
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
    margin-left: -350px;
    margin-top:5px;
    top: 35px;
    ${(props) => props.right && `rigth. 15px; `}
    ${(props) => !props.right && `left: 15px; `};
`;

export const CopyrightText = styled.p`
    padding: 5px;
    margin:20px;
    text-align: center;
    margin-left: -50px;
    color: ${colors.dark1};
`;