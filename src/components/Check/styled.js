import styled from 'styled-components';
import { Field } from 'formik';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  text-overflow: ellipsis;
  height: min-content;
  ${({ $bsStyle }) => $bsStyle || ''}
`;

export const Checkbox = styled(Field).attrs({ type: 'checkbox' })`
  &:not(:checked),
  &:checked {
    opacity: 0;
    display: none;
    visibility: hidden;
  }
  &:not(:checked) + label,
  &:checked + label {
    cursor: pointer;
    font-size: 13px;
    padding-left: 30px;
    position: relative;
  }

  &:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    width: 15px;
    height: 15px;
    border-radius: 3px;
    background-size: 52%;
    transform: translateY(-50%);
    transition: all 100ms ease-in-out;
    background-color: white;
    border: 1px grey solid;
    margin-top: 8px;
  }

  &:checked + label:before {
    content: '\\2713';
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    font-size: 25px;
    left: 0;
    width: 15px;
    height: 15px;
    border-radius: 3px;
    transform: translateY(-50%);
    transition: all 100ms ease;
    margin-top: 8px;
  }
`;

export const Label = styled.label`
  color: black;
  font-family: Lobster, sans-serif;
  height: 25px;
`;
