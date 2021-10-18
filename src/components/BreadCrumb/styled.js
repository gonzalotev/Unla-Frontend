import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #9cc1e4;
  margin: 20px;
  width: 100%;
  color: white;
  padding: 20px;
`;

export const Identifier = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  justify-content: center;
  display: flex;
  align-items: center;
  align-self: center;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  ${({ active }) => active
    && `
  color: #2081c6;
  background: white;
  `}
`;

export const Description = styled.label`
  color: white;
  font-size: 20px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const Divisor = styled.div`
  border-left: 1px #2081c6 solid;
  transform: rotate(90deg);
`;
