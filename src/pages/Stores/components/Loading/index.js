import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Loading = ({ loading }) => {
  if (!loading) return false;
  return (
    <Container>
      <ActivityIndicator size="large" color="#fff" />
    </Container>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Loading;
