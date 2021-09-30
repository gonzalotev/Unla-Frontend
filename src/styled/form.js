import { Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 15px 30px 0 30px;
  width: 100%;
  position: relative;
  height: 100%;
  overflow-x: hidden;
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
