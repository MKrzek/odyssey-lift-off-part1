import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { LoadingSpinner } from '@apollo/space-kit/Loaders/LoadingSpinner';

/**
 * Query Results conditionally renders Apollo useQuery hooks states:
 * loading, error or its children when data is ready
 */

interface QueryResultInterface{
  loading?: boolean
  error?: any
  data?: any
  children?: ReactElement
}
const QueryResult = ({ loading, error, data, children }: QueryResultInterface) => {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }
  if (loading) {
    return (
      <SpinnerContainer>
        <LoadingSpinner data-testid="spinner" size="large" theme="grayscale" />
      </SpinnerContainer>
    );
  }
  if (!data) {
    return <p>Nothing to show...</p>;
  }
  if (data) {
    return children;
  }
};

export default QueryResult;

/** Query Result styled components */
const SpinnerContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
});
