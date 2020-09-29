import React, { useState } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '~/store/modules/auth/actions';

import ContainerLogin from '~/components/ContainerLogin';
import Input from '~/components/Input';
import { Content, SignInButton, LinkTo } from './styles';

const SignIn = ({ navigation }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleHomePage = () => {
    if (loading) return;
    dispatch(signInRequest(email, password));
  };

  const handleSignUpPage = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ContainerLogin>
      <Content>
        <Input
          icon="email"
          placeholder="E-mail"
          onChangeText={setEmail}
          value={email}
          autoCapitalize="none"
        />
        <Input
          icon="key-variant"
          placeholder="Senha"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />

        <SignInButton onPress={handleHomePage} loading={loading}>
          Entrar
        </SignInButton>

        <LinkTo onPress={handleSignUpPage}>
          <Text>Cadastre-se</Text>
        </LinkTo>
      </Content>
    </ContainerLogin>
  );
};

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default SignIn;
