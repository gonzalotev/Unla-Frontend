import React from 'react';
import styled, { css } from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { nonSelectable, nonDraggable, noBoxShadow } from 'styled/globals';

export const DatePickerWrapper = styled(({ className, ...props }) => (
  <DatePicker {...props} wrapperClassName={className} />
))`
  .react-datepicker-wrapper,
  .react-datepicker__input-container input {
    box-shadow: inset 1px 2px 4px #d7d7d7, 0 0 4px #9f9f9f;
    border-radius: 8px;
    border: 1px solid #d7d7d7;
    width: 100%;
    background: #d8e1f1;
    text-align: center;
    opacity: 1;
    color: #000;
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
    ${({ disabled }) => (disabled
    ? css`
            pointer-events: none;
            background: rgba(240, 240, 240, 0.7);
            ${nonSelectable};
            ${nonDraggable};
            input {
              box-shadow: none;
              border: none;
            }
          `
    : '')};
    ${noBoxShadow}
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'initial')};
  ${({ $bsStyle }) => $bsStyle || ''};
`;
