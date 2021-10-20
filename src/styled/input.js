import styled from 'styled-components';
import { Field } from 'formik';
import { noBoxShadow, getPlaceholderColor } from 'styled/globals';
import { colors } from 'constant';

export const Input = styled(Field).attrs(({ noFormik, type = 'text', disabled = false }) => ({
  as: noFormik ? 'input' : Field,
  type,
  disabled,
}))`
  box-shadow: inset 1px 2px 4px #d7d7d7, 0 0 4px #9f9f9f;
  border-radius: 1px;
  border: 1px solid #d7d7d7;
  width: 100%;
  background: #d8e1f1;
  text-align: center;
  opacity: 1;
  color: ${colors.dark1};
  font-weight: 400;
  font-size: 1.1rem;
  font-family: Lobster, sans-serif;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  display: block;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  overflow: visible;
  min-width: 150px;
  height: 38px;
  max-height: 38px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  ${getPlaceholderColor()};
  ${noBoxShadow}
  ${({ $bsStyle }) => $bsStyle || ''};
`;
