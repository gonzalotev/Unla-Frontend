import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const DropArea = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 0 10px;
  width: 100%;
  height: 40px;
  box-shadow: inset 1px 2px 4px #d7d7d7, 0 0 4px #9f9f9f;
  background: #d8e1f1;
  border-radius: 8px;
  border: 1px solid #d7d7d7;
  font-weight: 400;
  font-size: 14px;
  font-family: Lobster, sans-serif;
  color: grey;
  cursor: pointer;
  p {
    margin: 0;
  }
`;

export const CredentialPanel = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
