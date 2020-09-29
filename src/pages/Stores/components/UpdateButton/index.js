import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableNativeFeedback } from 'react-native';

import PropTypes from 'prop-types';
import { Container } from './styles';

const UpdateButton = ({ onPress }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <Container>
        <Icon name="refresh" size={22} color="#fff" />
      </Container>
    </TouchableNativeFeedback>
  );
};

UpdateButton.propTypes = {
  onPress: PropTypes.func,
};

UpdateButton.defaultProps = {
  onPress: () => {},
};

export default UpdateButton;
