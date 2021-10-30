import React from 'react';
import PropTypes from 'prop-types';
import es from 'date-fns/locale/es';

import { DatePickerWrapper, Container } from './styled';

const DatePickerLocale = ({
  name, value, isDisabled, placeholder, onChange, $bsStyle,
}) => (
  <Container key={`input-${name}`} $bsStyle={$bsStyle} isDisabled={isDisabled}>
    <DatePickerWrapper
      id={name}
      dateFormat="dd/MM/yyyy"
      selected={Date.parse(value)}
      onChange={onChange}
      locale={es}
      placeholderText={placeholder}
      showMonthDropdown
      maxDate={Date.now()}
      showYearDropdown
      adjustDateOnChange
      disabled={isDisabled}
    />
  </Container>
);

DatePickerLocale.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
  name: PropTypes.string,
  $bsStyle: PropTypes.shape({}),
};

DatePickerLocale.defaultProps = {
  value: undefined,
  placeholder: 'Fecha',
  $bsStyle: undefined,
  name: undefined,
  isDisabled: false,
  onChange: () => ({}),
};

export default DatePickerLocale;
