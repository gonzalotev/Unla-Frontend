import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

import {
  StyledTextInput, StyledLabel, StyledIcon, ErrorMsg,
} from './styled';

const TextInput = ({
  label, iconLeft, iconRight, onClickIconRight, ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <div style={{ position: 'relative' }}>
      <StyledLabel htmlFor={field.name}>
        {label}
      </StyledLabel>
      {iconLeft && (
        <StyledIcon>
          {iconLeft}
        </StyledIcon>
      )}
      <StyledTextInput
        invalid={meta.touched && meta.error}
        {...field}
        {...props}
      />
      {iconRight && (
        <StyledIcon onClick={onClickIconRight} right>
          {iconRight}
        </StyledIcon>
      )}
      {meta.touched && meta.error ? <ErrorMsg>{meta.error}</ErrorMsg> : (
        <ErrorMsg style={{ visibility: 'hidden' }}>.</ErrorMsg>
      )}
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClickIconRight: PropTypes.func,
  iconLeft: PropTypes.element,
  iconRight: PropTypes.element,
};

TextInput.defaultProps = {
  iconLeft: undefined,
  iconRight: undefined,
  onClickIconRight: undefined,
};

export default TextInput;
