import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999999999999999;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  background-color: white;
`;

export const Title = styled.label`
  font-size: 16px;
  font-weight: bold;
`;

export const Content = styled.div`
  z-index: 99999;
  background: ${({ background }) => background || 'transparent'};
  position: relative;
  padding: 1rem;
  height: 100%;
  margin: ${({ fullPage }) => (fullPage ? 'initial' : 'auto')};
  max-width: ${({ fullPage }) => (fullPage ? 'initial' : '500px')};
  border-radius: ${({ fullPage }) => (fullPage ? 'initial' : '3px')};
  align-items: center;
  display: flex;
  flex-direction: column;
`;
