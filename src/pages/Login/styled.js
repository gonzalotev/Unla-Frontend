import styled from 'styled-components';
import { colors } from 'constant';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items:  center;
  background: linear-gradient(153deg, rgba(62,94,199,1) 0%, rgba(168,165,214,1) 0%, rgba(94,137,255,1) 0%, rgba(213,221,249,1) 96%, rgba(255,255,255,1) 100%);
`;

export const StyledFormArea = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: ${(props) => props.bg || colors.light1};
  text-align: center;
  padding: 45px 55px;
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

  &:hover{
    background-color: ${colors.theme};
    color: ${colors.primary};
    cursor: pointer;
  }
`;

export const StyledTittle = styled.h2`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.primary)};
  padding: 5px;
  margin-bottom: 20px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 25px;
`;

export const CopyrightText = styled.p`
  padding: 5px;
  margin:20px;
  text-align: center;
  color: ${colors.dark1};
`;

export const StyledTextInput = styled.div`
padding: 5px;
margin:20px;
text-align: center;
color: ${colors.dark1};
`;

export const StyledLabel = styled.p`
padding: 5px;
margin:20px;
text-align: center;
color: ${colors.dark1};
`;

export const StyledIcon = styled.p`
padding: 5px;
margin:20px;
text-align: center;
color: ${colors.dark1};
`;

export const ErrorMsg = styled.p`
padding: 5px;
margin:20px;
text-align: center;
color: ${colors.dark1};
`;
