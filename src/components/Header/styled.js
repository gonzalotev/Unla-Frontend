import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  width: 100%;
  background: #699fd2;
  height: 100px;
  border: #86b9e5 2px outset;
`;

export const Wrapper = styled.div`
  display: flex;
  border: #84bdf5 3px outset;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  width: 100%;
  margin: 5px;
  border: #84bdf5 2px outset;
`;

export const Title = styled.label`
  font-weight: bold;
  font-size: 35px;
  color: white;
  font-family: 'Abril Fatface', serif;
`;

export const Subtitle = styled.label`
  font-weight: bold;
  font-size: 14px;
  color: white;
`;

export const Text = styled.label`
  font-weight: bold;
  font-size: 25px;
  letter-spacing: 3px;
  color: white;
  font-family: Josefin Slab, sans-serif;
  text-transform: uppercase;
`;
