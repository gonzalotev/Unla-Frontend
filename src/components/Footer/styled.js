import styled from 'styled-components';

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background: #666668;
  display: flex;
  max-height: 50px;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 20px;
  overflow: hidden;
  height: 100%;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100%;
  color: white;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  font-size: 14px;
  height: 100%;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 678px) {
    ${({ noSmall }) => (noSmall ? 'display: none;' : '')}
  }
  span {
    font-weight: bold;
  }
`;

export const Right = styled.div`
  align-self: flex-end;
`;
