import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Marker } from 'react-native-maps';

const MarkerPoint = ({ location, title, type }) => {
  return (
    <Marker coordinate={location} title={title}>
      <Icon
        name={type === 'store' ? 'store' : 'home-account'}
        size={48}
        color={type === 'store' ? '#225130' : '#e60014'}
      />
    </Marker>
  );
};

MarkerPoint.propTypes = {
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MarkerPoint;
