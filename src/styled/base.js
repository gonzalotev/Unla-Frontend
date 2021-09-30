import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding-bottom: 10px;
  background-color: #fff;
  width: 100%;
  ${({ $bsStyle }) => $bsStyle || ''}
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: ${({ center, right }) => {
    if (center) {
      return 'center';
    }
    return right ? 'flex-end' : 'initial';
  }};
  ${({ $bsStyle }) => $bsStyle || ''}
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ flex }) => (flex ? 1 : 'initial')};
  align-items: ${({ left, center, right }) => {
    if (!left && !center && !right) {
      return 'initial';
    }
    if (center) {
      return 'center';
    }
    return right ? 'flex-end' : 'flex-start';
  }};
  justify-content: ${({ centered }) => (centered ? 'center' : 'initial')};
  padding-right: ${({ right }) => (right ? '20px' : 0)};
  ${({ $bsStyle }) => $bsStyle || ''}
`;

export const EmptyPage = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    155.18deg,
    rgb(29, 37, 38) -0.81%,
    rgb(29, 37, 38) 16.33%,
    rgb(0, 0, 0) 118.11%
  );
  ${({ $bsStyle }) => $bsStyle || ''}
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  ${({ $bsStyle }) => $bsStyle || ''}
`;

export const Label = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
  color: ${({ color }) => color || '#000'};
  ${({ $bsStyle }) => $bsStyle || ''}
`;

export const Text = styled.p`
  color: white;
  margin: 0 0 8px 0;
  font-size: 16px;
  padding-right: 5px;
  font-weight: 500;
  font-family: Lobster, sans-serif;
  @media screen and (max-width: 420px) {
    font-size: 15px;
  }
  ${({ $bsStyle }) => $bsStyle || ''}
`;

export const Title = styled.h1`
  letter-spacing: 0.09px;
  color: grey;
  font-size: 1.5rem;
  font-weight: 800;
  margin: 30px;
  width: 100%;
  text-align: center;
  font-family: Lobster, sans-serif;
  ${({ $bsStyle }) => $bsStyle || ''}
`;

const marginWithExtremes = css`
  margin-left: 15px;
  margin-right: 15px;
  @media screen and (max-width: 568px) {
    &:first-of-type {
      margin-left: 0;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export const fullWidthStyle = css`
  max-width: 100%;
  ${marginWithExtremes}
`;

export const commonWidthStyle = css`
  display: flex;
  flex-direction: column;
  max-width: 245px;
  min-width: 245px;
  width: 245px;
  ${marginWithExtremes}
`;

export const middleWidthStyle = css`
  max-width: 250px;
  ${marginWithExtremes}
`;

export const smallWidthStyle = css`
  max-width: 150px;
  ${marginWithExtremes}
`;

export const minWidthStyle = css`
  max-width: min-content;
  ${marginWithExtremes}
`;
