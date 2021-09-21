import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: rgb(62,94,199);
  background: linear-gradient(153deg, rgba(62,94,199,1) 0%, rgba(168,165,214,1) 0%, rgba(94,137,255,1) 0%, rgba(213,221,249,1) 96%, rgba(255,255,255,1) 100%);
`;

export const Title = styled.h1`
  font-family: fantasy;
  color: white;
  text-align: center;
  font-size: 140px;
  padding: 10px;
  margin-top: 0;
`;

export const SubTitle = styled.h2`
  font-family: fantasy;
  color: white;
  text-align: center;
  font-size: 50px;
`;

export const HighlightedText = styled.h3`
  font-family: fantasy;
  color: white;
  text-align: center;
  font-size: 40px;
  margin-top: 40px;
`;

export const Alert = styled.h4`
  background-color:#002fff;
  font-family: fantasy;
  color: white;
  font-size: 30px;
  width: fit-content;
  border-radius: 15px;
  padding: 5px 15px;
  margin-left: 3%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

`;

export const Body = styled.p`
  display: flex;
  flex-direction: column;
  font-family: fantasy;
  background-color: #8DA2F8;
  color: black;
  font-size: 25px;
  border: black solid 1px;
  border-radius: 15px;
  width: 95%;
  text-align: center;
  margin-left: 3%;
  margin-top: -2%;
`;

export const AccessLink = styled.button`
  font-size: 35px;
  text-decoration: none;
  margin-top: 1%;
  border: none;
  color: whitesmoke;
  background-color: rgb(145, 171, 239);
  margin-left: 80%;
`;
