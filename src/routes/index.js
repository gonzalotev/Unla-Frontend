import React, { useEffect } from 'react';
import { history } from 'store';
import { useDispatch, useSelector } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { getToken, getIsRequested } from 'store/Auth/selectors';
import { authGetTokenRequest } from 'store/Auth/actions';

import { GlobalStyle } from './styled';
import WithSessionRoutes from './withSessionRoutes';
import WithoutSessionRoutes from './withoutSessionRoutes';

const Routes = () => {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const isRequested = useSelector(getIsRequested);
  const getRoutes = (newToken) => (newToken ? <WithSessionRoutes /> : <WithoutSessionRoutes />);

  useEffect(() => {
    dispatch(authGetTokenRequest());
  }, []);

  return (
    <ConnectedRouter history={history}>
      <GlobalStyle />
      {isRequested && getRoutes(token)}
    </ConnectedRouter>
  );
};

export default Routes;
