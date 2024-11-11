import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function withLoadingIndicator(WrappedComponent) {
  return function WithLoadingIndicatorComponent({ isLoading, ...props }) {
    if (isLoading) {
      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
}

export default withLoadingIndicator;
