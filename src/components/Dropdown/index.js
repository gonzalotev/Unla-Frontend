import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import find from 'lodash/find';

import customStyles from './custom-style';
import { Container } from './styled';

const Dropdown = ({
  value,
  options,
  onChange,
  name,
  getOptionValue,
  getOptionLabel,
  placeholder,
  disabled,
  isSearchable,
  $bsStyle,
  ...props
}) => {
  const handleChange = (newValue) => {
    const selectedValue = newValue ? getOptionValue(newValue) : null;
    return onChange({ target: { id: name, value: selectedValue } });
  };

  return (
    <Container $bsStyle={$bsStyle}>
      <ReactSelect
        name={name}
        options={options}
        onChange={handleChange}
        placeholder={placeholder}
        value={value ? find(options, (option) => getOptionValue(option) === value) : null}
        defaultValue={null}
        getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}
        styles={customStyles}
        isDisabled={disabled}
        isSearchable={isSearchable}
        {...props}
      />
    </Container>
  );
};

Dropdown.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({})),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  getOptionValue: PropTypes.func,
  getOptionLabel: PropTypes.func,
  disabled: PropTypes.bool,
  isSearchable: PropTypes.bool,
  $bsStyle: PropTypes.shape({}),
};

Dropdown.defaultProps = {
  options: [],
  value: null,
  getOptionValue: (option) => option.value,
  getOptionLabel: (option) => option.label,
  disabled: false,
  isSearchable: false,
  placeholder: 'Select.',
  name: 'select',
  $bsStyle: null,
};

export default Dropdown;
