import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Content = styled.View`
  background: #fff;
  padding: 20px;
  align-self: stretch;
  align-items: center;
  justify-content: center;
`;

export const SignUpButton = styled(Button)`
  align-self: stretch;
  background: blue;
`;

export const TextButton = styled.Text`
  color: red;
  font-weight: bold;
  font-size: 16px;
`;

export const LinkTo = styled.TouchableOpacity`
  margin-top: 20px;
`;
