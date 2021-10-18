import React, { cloneElement } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Button } from 'styled/buttons';
import {
  Container, Content, Overlay, Title,
} from './styled';

const CustomModal = ({
  isActive, children, title, handleClose, fullPage, background, ...props
}) => (isActive
  ? ReactDOM.createPortal(
    <>
      <Overlay />
      <Container
        fullPage={fullPage}
        isActive={isActive}
        aria-modal
        aria-hidden
        tabIndex={-1}
        role="dialog"
      >
        <Content fullPage={fullPage} background={background}>
          {title && <Title>{title}</Title>}
          {cloneElement(children, { ...props })}
          {handleClose && <Button onClick={handleClose}>Volver</Button>}
        </Content>
      </Container>
    </>,
    document.body,
  )
  : null);

CustomModal.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  isActive: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  handleClose: PropTypes.func,
  background: PropTypes.string,
  fullPage: PropTypes.bool,
};

CustomModal.defaultProps = {
  title: null,
  handleClose: null,
  isActive: false,
  background: null,
  fullPage: false,
};

export default CustomModal;
