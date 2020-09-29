import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 45px;
  background: #2d8b44;
  border-radius: 4px;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 10px;
  right: 10px;
  border-radius: 25px;

  height: 50px;
  width: 50px;
`;
