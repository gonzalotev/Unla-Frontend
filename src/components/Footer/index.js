import React from 'react';
import { Row } from 'styled/base';

import { Container, Wrapper, Item } from './styled';

const Footer = () => (
  <Container>
    <Wrapper>
      <Item>
        <span>UDLA</span>
        <Row>
          <span>Campus Buenos Aires:</span>
          &nbsp;Lima 717 C1073AAO (Ciudad Autónoma de Buenos Aires)
          -&nbsp;
          <span>Sede Recoleta:</span>
          &nbsp;Libertad 1340 C10116ABB (Ciudad Autónoma de Buenos
          Aires)
        </Row>
      </Item>
    </Wrapper>
  </Container>
);

export default Footer;
