import styled from 'styled-components';
import { Form as FormFormik } from 'formik';

export const Form = styled(FormFormik).attrs({ noValidate: true })`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 38px;
  align-items: center;
  overflow: hidden;
`;

export const TextAlert = styled.p`
  display: flex; 
  height: 80%;
  width: 100%;
  padding-left: 10%;
`;
