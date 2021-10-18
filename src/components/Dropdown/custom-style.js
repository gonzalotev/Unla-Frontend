const customStyles = {
  container: (provider) => ({
    ...provider,
    width: '100%',
    borderRadius: '8px',
    boxShadow: 'inset 1px 2px 4px #d7d7d7, 0 0 4px #9f9f9f',
  }),
  control: (provider, state) => ({
    ...provider,
    fontWeight: 400,
    fontSize: '1.1rem',
    border: 'none',
    background: '#d8e1f1',
    height: '38px',
    textAlign: 'center',
    '&:hover': { borderColor: state.isFocused ? '#212529' : '#4c99fe' },
  }),
  valueContainer: (provider) => ({
    ...provider,
    fontFamily: 'Lobster, sans-serif',
    justifyContent: 'center',
  }),
  option: (provided) => ({
    ...provided,
    color: 'grey',
    backgroundColor: 'white',
    fontSize: '14px',
    height: '30px',
    fontFamily: 'Lobster, sans-serif',
    ':hover': { backgroundColor: '#4c99fe', color: 'white' },
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return {
      ...provided,
      opacity,
      transition,
      fontSize: '14px',
      fontFamily: 'Lobster, sans-serif',
    };
  },
};

export default customStyles;
