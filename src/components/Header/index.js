import React from 'react';
import {
  Container, Wrapper, Title, Subtitle, Text, Content,
} from './styled';
import { Column, Row } from '../../styled/base';

const Header = () => (
  <Container>
    <Wrapper>
      <Content>
        <Row $bsStyle={{ height: '100%' }}>
          <Column center $bsStyle={{ width: '150px', marginLeft: '20px', alignSelf: 'center' }}>
            <Row center>
              <Column $bsStyle={{ textAlign: 'center' }}>
                <Title>ISDLA</Title>
                <Subtitle>Instituto Superior De La Alegria</Subtitle>
              </Column>
            </Row>
          </Column>
          <Column center $bsStyle={{ marginLeft: '40px', alignSelf: 'center' }}>
            <Text>Inscripción Online</Text>
          </Column>
        </Row>
      </Content>
    </Wrapper>
  </Container>
);

export default Header;
