import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const Header = ({ title, subTitle }) => {
  return (
    <View>
      <Text style={styles.header}>{title}</Text>
      <Text style={styles.sub}>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  sub: {
    fontSize: 15,
    marginBottom: 5,
    textAlign: 'center',
  },
});

export default Header;