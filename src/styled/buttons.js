import styled from 'styled-components';
import { noBoxShadow } from 'styled/globals';

export const Button = styled.button.attrs(({ type }) => ({ type: type || 'button' }))`
  cursor: ${({ cursor }) => cursor || 'pointer'};
  color: white;
  font-weight: 700;
  border-radius: 8px;
  font-family: Lobster, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0 31px;
  border: #7bbef8 5px outset;
  transform: translate(0, 0);
  max-width: 300px;
  min-height: 39px;
  background: #86b9e5;
  line-height: 40px;
  height: 40px;
  width: min-content;
  font-size: 20px;
  margin: 0 5px;
  &:disabled {
    padding-left: 11px;
    padding-right: 11px;
    cursor: not-allowed;
    filter: ${({ noOpacity, greyDisabled }) => (noOpacity || greyDisabled ? 'initial' : 'brightness(0.7)')};
    opacity: ${({ noOpacity, greyDisabled }) => (noOpacity || greyDisabled ? 1 : 0.9)};
    background: grey;
  }
  &:hover {
    filter: brightness(105%);
  }
  &:active {
    border: #7bbef8 5px inset;
  }
  ${noBoxShadow};
  ${({ $bsStyle }) => $bsStyle || ''}
`;
