import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, TInput } from './styles';

const SearchInput = ({ style, icon, ...rest }) => {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="#225130" />}
      <TInput {...rest} />
    </Container>
  );
};

SearchInput.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SearchInput.defaultProps = {
  icon: null,
  style: {},
};

export default SearchInput;
