import { Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 15px 30px 0 30px;
  width: 100%;
  height: 100%;
  position: relative;
  height: 100%;
  overflow-x: hidden;
  background: linear-gradient(153deg, rgba(62,94,199,1) 0%, rgba(168,165,214,1) 0%, rgba(94,137,255,1) 0%, rgba(213,221,249,1) 96%, rgba(255,255,255,1) 100%);
`;

export const WrapperInputs = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
  justify-content: space-between;
  @media screen and (max-width: 580px) {
    div + div {
      margin-left: 0;
    }
  }
  ${({ $bsStyle }) => $bsStyle || ''}
`;
